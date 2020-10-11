<template>
  <div
    class="py-15 my-10 wrapper"
  >
    <v-container>
      <v-row
        align="center"
      >
        <v-col
          v-if="data.left"
          cols="12"
          md="6"
          class="section__left pr-10"
        >
          <Column
            :type="data.left.type"
            :data="data.left.data"
          />
        </v-col>
        <v-col
          v-if="data.right"
          cols="12"
          md="6"
          class="section__right pl-10"
        >
          <Column
            :type="data.right.type"
            :data="data.right.data"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { BlockSectionData } from '@/components/types'
import Column from '@/components/Blocks/Section/Column.vue'

@Component({
  name: 'Section',
  components: {
    Column
  }
})
export default class Section extends Vue {
  @Prop() data!: BlockSectionData
}
</script>

<style scoped>
  .wrapper {
    background-image: url("~@/assets/images/blob2.svg");
    background-position-x: -100px;
    background-size: 300px;
  }
</style>
