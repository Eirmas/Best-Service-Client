import axios from 'axios'

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

    send = async (token: string): Promise<{ status: boolean; msg: string }> => {
      return await axios.post(process.env.VUE_APP_EMAIL_ENDPOINT, {
        recaptcha: {
          response: token
        },
        mail: {
          subject: this.mail.subject,
          content: this.createMailTemplate(this.mail)
        }
      }).then((res) => {
        return {
          status: res.data.status || false,
          msg: res.data.msg || 'En feil oppstod'
        }
      }).catch((err) => {
        return {
          status: false,
          msg: err
        }
      })
    }

    createMailTemplate = (mail: MailInterface): string => {
      return `
        <div>
            <h2>${mail.subject}</h3>
            <br>
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
