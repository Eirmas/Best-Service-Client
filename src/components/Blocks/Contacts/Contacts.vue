<template>
  <div
    :id="data.id || false"
    :class="[data.background ? data.background : '', 'contact__wrapper white py-15']"
  >
    <v-container>
      <div class="contact__head pt-10 pb-15">
        <h1 class="text-center blue--text">{{ data.title }}</h1>
      </div>
      <v-row class="pt-10 blob">
        <v-col
          cols="4"
          v-for="(contact, i) in data.contacts"
          :key="i"
          class="d-flex flex-column"
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
  .blob {
    position: relative;
    z-index: 0;
    &:before {
      content: '';
      width: 70px;
      height: 70px;
      left: -18px;
      bottom: -8px;
      background-image: url('~@/assets/images/circle-orange.svg');
      background-position: center;
      background-size: cover;
      position: absolute;
    }
    &:after {
      content: '';
      width: 70px;
      height: 70px;
      right: -5px;
      bottom: 0;
      z-index: -1;
      background-image: url('~@/assets/images/grid.svg');
      background-position: center;
      background-size: cover;
      position: absolute;
    }
  }
</style>
