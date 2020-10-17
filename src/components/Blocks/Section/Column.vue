<template>
  <div
    v-if="type === BlockSection.TEXT && data.heading && data.text"
  >
    <h2 class="pb-4 blue--text">{{ data.heading }}</h2>
    <div
      v-for="(text, i) in data.text"
      :key="i"
      class="pb-5 d-flex"
    >
      <div
        v-if="text.icon"
        class="pr-3"
      >
        <v-icon v-text="`$vuetify.icons.${text.icon}`"/>
      </div>
      <div>
        <span class="blue--text" v-html="text.content" />
      </div>
    </div>
    <v-btn
      v-if="data.button"
      :to="data.button.href"
      color="orange"
      dark
    >
      <span>{{ data.button.text }}</span>
    </v-btn>
  </div>
  <v-card
    v-else-if="type === BlockSection.IMAGE && data.src"
    class="column__img"
  >
    <v-img
      :src="data.src"
      :alt="data.alt || 'Bilde'"
      :lazy-src="data.src"
      aspect-ratio="1.8"
    />
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { BlockSection, Image, SectionText } from '@/components/types'

@Component({
  name: 'Column'
})
export default class Column extends Vue {
  @Prop() type!: BlockSection
  @Prop() data!: SectionText | Image
  BlockSection = BlockSection
}
</script>

<style lang="scss">
  .section__left .column__img {
    border-radius: 10px 50px 10px 10px;
    z-index: 0;
    &:after {
      content: '';
      width: 70px;
      height: 70px;
      left: -30px;
      z-index: -1;
      bottom: -20px;
      background-image: url('~@/assets/images/circle-orange.svg');
      background-position: center;
      background-size: cover;
      position: absolute;
    }
    &:before {
      content: '';
      width: 70px;
      height: 70px;
      right: -17px;
      bottom: -12px;
      z-index: -1;
      background-image: url('~@/assets/images/grid.svg');
      background-position: center;
      background-size: cover;
      position: absolute;
    }
  }

  .section__right .column__img {
    border-radius: 50px 10px 10px 10px;
    &:before {
      content: '';
      width: 70px;
      height: 70px;
      left: -17px;
      bottom: -12px;
      background-image: url('~@/assets/images/grid.svg');
      background-position: center;
      background-size: cover;
      position: absolute;
    }
    &:after {
      content: '';
      width: 70px;
      height: 70px;
      right: -30px;
      bottom: -20px;
      z-index: -1;
      background-image: url('~@/assets/images/circle-orange.svg');
      background-position: center;
      background-size: cover;
      position: absolute;
    }
  }
  .column__img {
    position: relative;
    z-index: 1;
  }
  @media (max-width: 599px) {
    .column__img {
      box-shadow: none;
      border-radius: 10px 10px 10px 10px !important;

      &:before, &:after {
        visibility: hidden;
      }
    }
  }
</style>
