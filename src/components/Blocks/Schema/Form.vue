<template>
  <form>
    <v-row>
      <v-col cols="12" sm="6" md="6">
        <v-text-field
          v-model="firstName"
          outlined
          label="Fornavn *"
          required
        />
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-text-field
          v-model="lastName"
          outlined
          label="Etternavn"
        />
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-text-field
          :rules="emailRules"
          v-model="email"
          outlined
          label="E-mail adresse"
          hint="Du får svar på denne adressen"
          persistent-hint
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field outlined label="Email*" required></v-text-field>
      </v-col>
      <v-col cols="12" sm="12">
        <v-select
          v-model="service"
          :items="['Transport', 'Avfall og Makulering', 'Lager']"
          outlined
          label="Tjeneste *"
          required
        ></v-select>
      </v-col>
      <v-col cols="12" sm="12">
        <v-textarea
          v-model="message"
          outlined
          no-resize
          label="Kommentar"
        ></v-textarea>
      </v-col>
      <v-col cols="12">
        <v-btn
          color="orange"
          dark
          @click="send"
        >
          <span>Send</span>
        </v-btn>
      </v-col>
    </v-row>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component({
  name: 'Form'
})
export default class Form extends Vue {
  @Prop() onComplete!: () => {}

  firstName = ''
  lastName = ''
  email = ''
  service = []
  message = ''

  emailRules = [
    (v: string) => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Ugyldig e-mail adresse'
  ]

  send = (): void => {
    if (this.onComplete) {
      this.onComplete()
      setTimeout(() => {
        this.clearInputs()
      })
    }
  }

  clearInputs = (): void => {
    this.firstName = ''
    this.lastName = ''
    this.email = ''
    this.service = []
    this.message = ''
  }
}
</script>

<style scoped>

</style>