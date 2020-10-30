<template>
  <v-card
    elevation="0"
    class="card__wrapper flex d-flex flex-column pa-8"
  >
    <div>
      <v-img
        :src="card.image.src"
        :alt="card.image.alt"
        max-height="150"
        contain
        class="justify-center align-center text-center"
      />
    </div>
    <v-card-title class="justify-center blue--text">{{ card.title }}</v-card-title>
    <v-card-text class="flex">{{ card.text }}</v-card-text>
    <v-card-actions
      v-if="card.button"
    >
      <router-link
        :to="card.button.href"
        class="text-decoration-none"
      >
        <v-btn
          dark
          color="orange"
          class="px-5"
        >
          {{ card.button.text }}
        </v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { Card as CardInterface } from '@/components/types'

@Component({
  name: 'Card'
})
export default class Card extends Vue {
    @Prop() card!: CardInterface
}
</script>

<style scoped>
  .card__wrapper {
    -webkit-box-shadow: 0 20px 70px 0 rgba(116,134,177,0.2) !important;
    -moz-box-shadow: 0 20px 70px 0 rgba(116,134,177,0.2) !important;
    box-shadow: 0 20px 70px 0 rgba(116,134,177,0.2) !important;
    border: 1px solid #F3D4BD;
  }
</style>
