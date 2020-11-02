import axios from 'axios'
import { load } from 'recaptcha-v3'

export interface Destination {
    address: string;
    code: string;
    region: string;
}

export interface Destinations {
    from: Destination;
    to: Destination;
}

export interface MailInterface {
    subject: string;
    name: string;
    phone: string;
    email: string;
    service: string;
    message: string;
    destination?: Destinations;
}

export default class Mail {
    private readonly mail: MailInterface

    constructor (mail: MailInterface) {
      this.mail = mail
    }

    send = async (): Promise<{ data: { status: boolean; msg?: string } }> => {
      try {
        const token = await this.getToken()
        if (token) {
          const data = {
            recaptcha: {
              token: token
            },
            mail: {
              subject: this.mail.subject,
              contents: this.createMailTemplate(this.mail)
            }
          }
          return await axios.post(process.env.VUE_APP_EMAIL_ENDPOINT, data)
        } else {
          return {
            data: { status: false, msg: 'no-token' }
          }
        }
      } catch (e) {
        return {
          data: { status: false, msg: e }
        }
      }
    }

    getToken = async () => {
      const recaptcha = await load(process.env.VUE_APP_SITE_KEY, { autoHideBadge: true })
      return await recaptcha.execute('login')
    }

    createMailTemplate = (mail: MailInterface): string => {
      return `
        <div>
            <h4>Kunde</h4>
            <p>Navn: ${mail.name}</p>
            <p>Telefonnummer: ${mail.phone}</p>
            <p>E-postadresse: ${mail.email}</p>
            <br>
            <h4>Kunden er interessert i:</h4>
            <p>Tjeneste: ${mail.service}</p>
            ${(mail.destination) ? `<p>
            Fra: ${mail.destination.from.address}, ${mail.destination.from.code} ${mail.destination.from.region}<br>
            Til: ${mail.destination.to.address}, ${mail.destination.to.code} ${mail.destination.to.region}
            </p>` : '<br>'}
            <p>Melding: ${mail.message}</p>
        </div>
        `
    }
}
