<template>
  <div
    :id="data.id || false"
    :class="[data.background ? data.background : '', 'contact__wrapper white py-15']"
  >
    <v-container>
      <div class="contact__head pt-10 pb-5">
        <h1 class="text-center blue--text">{{ data.title }}</h1>
      </div>
      <v-row class="pt-10 blob justify-center">
        <v-col
          cols="12"
          md="6"
          v-for="(contact, i) in data.contacts"
          :key="i"
          class="d-flex flex-column pb-15 contact__col"
        >
          <Contact :contact="contact"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop } from 'vue-property-decorator'
import { BlockContactsData } from '@/components/types'
import Component from 'vue-class-component'
import Contact from '@/components/Blocks/Contacts/Contact.vue'

@Component({
  name: 'Contacts',
  components: {
    Contact
  }
})
export default class Contacts extends Vue {
  @Prop() data!: BlockContactsData
}
</script>

<style scoped lang="scss">
  .cards__wrapper .cards__head h1 {
    font-weight: 600;
  }
  .blob .contact__col:first-child {
      position: relative;
      z-index: 0;
      &:before {
        content: '';
        width: 70px;
        height: 70px;
        left: -18px;
        bottom: 42px;
        background-image: url('~@/assets/images/circle-orange.svg');
        background-position: center;
        background-size: cover;
        position: absolute;
      }
    }
  .blob .contact__col:last-child {
    position: relative;
    z-index: 0;
    &:after {
      content: '';
      width: 70px;
      height: 70px;
      right: -5px;
      bottom: 50px;
      z-index: -1;
      background-image: url('~@/assets/images/grid.svg');
      background-position: center;
      background-size: cover;
      position: absolute;
    }
  }
  @media (max-width: 959px) {
    .contact__col {
      max-width: 500px;
    }
    .blob {
      &:before, &:after {
        display: none;
      }
    }
  }
</style>
