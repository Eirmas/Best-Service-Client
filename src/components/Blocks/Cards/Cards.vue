<template>
    <div
      :id="data.id || false"
      :class="[data.background ? data.background : '', 'cards__wrapper pb-10']"
    >
      <v-container>
        <div class="cards__head pb-10">
          <h1 class="text-center blue--text">{{ data.title }}</h1>
          <p class="text-center blue--text">{{ data.caption }}</p>
        </div>
        <v-row>
          <v-col
            cols="4"
            v-for="(card, i) in data.cards"
            :key="i"
            class="d-flex flex-column"
          >
            <Card :card="card"/>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { BlockCardsData } from '@/components/types'
import Card from '@/components/Blocks/Cards/Card.vue'

@Component({
  name: 'Cards',
  components: {
    Card
  }
})
export default class Cards extends Vue {
  @Prop() data!: BlockCardsData
}
</script>

<style scoped lang="scss">
  .cards__wrapper {
    position: relative;
    z-index: 0;
    .cards__head {
      h1 {
        font-weight: 600;
      }
      p {
        font-size: 16px;
      }
    }
    &:after {
      content: '';
      z-index: -1;
      width: 300px;
      height: 300px;
      position: absolute;
      top: -40px;
      right: -100px;
      background-image: url("~@/assets/images/blob2.svg");
      background-size: 300px;
      transform: rotate(332deg) scaleX(-1);
    }
    &:before {
      content: '';
      z-index: -1;
      width: 300px;
      height: 300px;
      position: absolute;
      bottom: -130px;
      left: -100px;
      background-image: url("~@/assets/images/blob2.svg");
      background-size: 300px;
      transform: rotate(340deg);
    }
  }
</style>
