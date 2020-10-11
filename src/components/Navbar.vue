<template>
  <v-toolbar
    width="100%"
    flat
    color="light-grey"
    class="py-5 px-5 navbar"
  >
    <router-link to="/">
      <v-toolbar-title>
        <v-img src="../assets/logo.svg" alt="Best Service"/>
      </v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <v-btn
      v-for="(button, i) in buttons"
      :key="i"
      :color="button.bg"
      :dark="button.dark"
      class="ml-5 btn"
      elevation="0"
    >
      <span>{{ button.text }}</span>
    </v-btn>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'Navbar'
})
export default class Navbar extends Vue {
  buttons = [
    {
      text: 'Tjenester',
      bg: 'transparent',
      dark: false,
      link: {
        external: false,
        url: '#tjenester'
      }
    },
    {
      text: 'Om oss',
      bg: 'transparent',
      dark: false,
      link: {
        external: false,
        url: '#om-oss'
      }
    },
    {
      text: 'Kontakt oss',
      bg: 'transparent',
      dark: false,
      link: {
        external: false,
        url: '#kontakt'
      }
    },
    {
      text: 'Kundeportal',
      bg: 'orange',
      dark: true,
      link: {
        external: true,
        url: 'https://google.com'
      }
    }
  ]
}
</script>

<style scoped>
  .navbar {
    height: unset !important;
  }
</style>
