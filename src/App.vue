<template>
  <v-app id="app">
    <router-view/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'

@Component({
  name: 'App'
})
export default class App extends Vue {
  created () {
    this.updatePageTitle(this.$router.currentRoute)
  }

  updatePageTitle = (to: Route) => {
    document.title = to.meta.title
  }

  @Watch('$route')
  handler = (to: Route): void => this.updatePageTitle(to)
}
</script>
