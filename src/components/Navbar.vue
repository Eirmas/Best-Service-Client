<template>
  <v-app-bar
    color="light-grey"
    flat
    app
    absolute
    height="80"
    class="navbar"
  >
    <router-link
      to="/">
      <v-toolbar-title>
        <v-img src="../assets/logo.svg" alt="Best Service"/>
      </v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <router-link
      v-for="(button, i) in buttons"
      :to="button.link.url"
      :key="i"
      style="text-decoration: none;"
    >
      <v-btn
        :color="button.bg"
        :dark="button.dark"
        class="ml-5 btn"
        elevation="0"
      >
        <span>{{ button.text }}</span>
      </v-btn>
    </router-link>
  </v-app-bar>
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
<style lang="scss">
  .navbar .v-toolbar__content {
    margin: auto;
    max-width: 1300px;
  }
</style>
