<template>
  <v-form
    ref="form"
    v-model="valid"
  >
    <v-row class="py-2">
      <v-col cols="8" class="py-0">
        <v-text-field
          v-model="name"
          outlined
          dense
          label="Navn"
          autocomplete="name"
          :rules="[rules.required]"
          color="blue"
          class="form__input"
        />
      </v-col>
      <v-col cols="4" class="py-0">
        <v-text-field
          v-model="phone"
          outlined
          dense
          label="Telefonnummer"
          autocomplete="phone"
          :rules="[rules.required]"
          color="blue"
          class="form__input"
        />
      </v-col>
      <v-col cols="12" class="py-0">
        <v-text-field
          :rules="[rules.email, rules.required]"
          v-model="email"
          outlined
          dense
          label="E-post adresse"
          autocomplete="email"
          class="form__input"
          color="blue"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" class="py-0">
        <v-select
          v-model="service"
          :items="['Transport', 'Avfall og Makulering', 'Lager']"
          :rules="[rules.required]"
          outlined
          dense
          label="Tjeneste *"
          required
          color="blue"
          class="form__input"
        ></v-select>
      </v-col>
      <template
        v-if="service.includes('Transport')"
      >
        <v-col cols="12">
          <v-subheader >Fra</v-subheader>
        </v-col>
        <v-col cols="12" sm="4" class="py-0">
          <v-text-field
            v-model="destination.from.address"
            outlined
            dense
            :rules="[rules.requiredTransport]"
            label="Addresse"
            class="form__input"
            color="blue"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4" class="py-0">
          <v-text-field
            v-model="destination.from.region"
            outlined
            dense
            :rules="[rules.requiredTransport]"
            label="Poststed"
            class="form__input"
            color="blue"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4" class="py-0">
          <v-text-field
            v-model="destination.from.code"
            outlined
            dense
            :rules="[rules.requiredTransport]"
            label="Postnummer"
            class="form__input"
            color="blue"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-subheader >Til</v-subheader>
        </v-col>
        <v-col cols="12" sm="4" class="py-0">
          <v-text-field
            v-model="destination.to.address"
            outlined
            dense
            :rules="[rules.requiredTransport]"
            label="Addresse"
            class="form__input"
            color="blue"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4" class="py-0">
          <v-text-field
            v-model="destination.to.region"
            outlined
            :rules="[rules.requiredTransport]"
            dense
            label="Poststed"
            class="form__input"
            color="blue"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4" class="py-0">
          <v-text-field
            v-model="destination.to.code"
            outlined
            dense
            :rules="[rules.requiredTransport]"
            label="Postnummer"
            class="form__input"
            color="blue"
            required
          ></v-text-field>
        </v-col>
      </template>
      <v-col cols="12" sm="12" class="py-0">
        <v-textarea
          v-model="message"
          outlined
          :rules="[rules.required]"
          dense
          rows="6"
          no-resize
          label="Melding"
          color="blue"
          class="form__input"
        ></v-textarea>
      </v-col>
      <v-col cols="12">
        <v-btn
          color="orange"
          dark
          @click="submit"
        >
          <span>Send</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import Mail, { MailInterface } from '../../../service/Mail'

interface VueFormElement extends Vue {
  validate: Function;
}

@Component({
  name: 'Form'
})
export default class Form extends Vue {
  @Prop() onComplete!: () => {}

  $refs!: {
    form: VueFormElement;
  }

  valid = false
  name = ''
  email = ''
  phone = ''
  service = ['Transport']
  destination = {
    from: {
      address: '',
      region: '',
      code: ''
    },
    to: {
      address: '',
      region: '',
      code: ''
    }
  }

  message = ''

  rules = {
    required: (v: string) => !!v || 'Dette feltet er bligatorisk',
    requiredTransport: (v: string) => (!!v && this.service.includes('Transport')) || 'Dette feltet er bligatorisk',
    email: (v: string) => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Ugyldig e-mail adresse'
  }

  submit = async () => {
    if (this.$refs.form && this.$refs.form.validate()) {
      const mailer = new Mail(this.getData())
      const token = await this.$recaptcha('login')
      if (token) {
        await mailer.send('eheret').then((res) => {
          if (res.status) {
            this.send()
          } else {
            this.showError(res.msg)
          }
        }).catch(() => {
          console.log('error1')
        })
      } else {
        this.showError('Kunne ikke verifisere klienten')
      }
    }
  }

  getData = (): MailInterface => ({
    subject: `Tilbudsførespørsel - ${this.name}`,
    name: this.name,
    email: this.email,
    phone: this.phone,
    message: this.message,
    service: this.service.join(', '),
    destination: (this.service.length > 0 && this.service[0] === 'Transport') ? this.destination : undefined
  })

  showError = (err: string): void => {
    console.log(err)
  }

  send = (): void => {
    if (this.onComplete) {
      this.onComplete()
      setTimeout(() => {
        this.clearInputs()
      }, 5000)
    }
  }

  clearInputs = (): void => {
    this.name = ''
    this.email = ''
    this.service = []
    this.message = ''
  }
}
</script>

<style lang="scss">
  .form__input .v-input__slot fieldset {
    border: 1px solid #F3D4BD;
  }
</style>
