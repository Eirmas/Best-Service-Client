<template>
  <div>
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
          <v-img
            src="../assets/logo.svg"
            alt="BEST SERVICE"
            eager
          />
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <template
        v-for="(button, i) in buttons"
      >
        <router-link
          v-if="!button.link.external"
          :to="button.link.url"
          :key="i"
          class="text-decoration-none d-none d-sm-none d-md-block d-lg-block d-xl-block"
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
        <a
          v-else
          :href="button.link.url"
          :key="i"
          class="text-decoration-none d-none d-sm-none d-md-block d-lg-block d-xl-block"
        >
          <v-btn
            :color="button.bg"
            :dark="button.dark"
            class="ml-5 btn"
            elevation="0"
          >
            <span>{{ button.text }}</span>
          </v-btn>
        </a>
      </template>
      <v-app-bar-nav-icon
        class="d-block d-sm-block d-md-none d-lg-none d-xl-none"
        @click.stop="drawer = !drawer"
      />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      right
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-for="(button, i) in buttons"
          :key="i"
          class="my-5"
          active-class="text-decoration-underline"
        >
          <v-list-item>
            <router-link
              :to="button.link.url"
              class="text-decoration-none"
              style="text-decoration-color: #232055 !important;"
            >
              <v-list-item-content
                v-text="button.text"
                class="blue--text font-weight-bold"
              />
            </router-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'Navbar'
})
export default class Navbar extends Vue {
  drawer = false;

  buttons = [
    {
      text: 'Tjenester',
      bg: 'transparent',
      dark: false,
      link: {
        external: false,
        url: '/#tjenester'
      }
    },
    {
      text: 'Om oss',
      bg: 'transparent',
      dark: false,
      link: {
        external: false,
        url: '/#om-oss'
      }
    },
    {
      text: 'Kontakt oss',
      bg: 'transparent',
      dark: false,
      link: {
        external: false,
        url: '/#kontakt'
      }
    },
    {
      text: 'Kundeportal',
      bg: 'orange',
      dark: true,
      link: {
        external: true,
        url: 'http://best-server.no/K2/'
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
