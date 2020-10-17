<template>
  <div
    :id="data.id || false"
    :class="['wrapper', (data.blob) ? 'blob' : '', (data.background) ? data.background : '']"
  >
    <v-container>
      <v-row
        align="center"
        :class="(data.left.type === BlockSection.IMAGE) ? 'flex-wrap-reverse' : ''"
      >
        <v-col
          v-if="data.left"
          cols="12"
          sm="6"
          class="section__left pr-md-10 pl-sm-6"
        >
          <Column
            :type="data.left.type"
            :data="data.left.data"
          />
        </v-col>
        <v-col
          v-if="data.right"
          cols="12"
          sm="6"
          class="section__right pl-md-10 pl-sm-6"
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
import { BlockSection, BlockSectionData } from '@/components/types'
import Column from '@/components/Blocks/Section/Column.vue'

@Component({
  name: 'Section',
  components: {
    Column
  }
})
export default class Section extends Vue {
  @Prop() data!: BlockSectionData
  BlockSection = BlockSection
}
</script>

<style scoped lang="scss">
  .wrapper {
    padding: 5rem 0;
  }
  .blob {
    position: relative;
    z-index: 0;
    &:before {
      content: '';
      width: 300px;
      height: 300px;
      left: -100px;
      top: 30px;
      z-index: -1;
      background-image: url('~@/assets/images/blob2.svg');
      background-position: center;
      background-size: cover;
      position: absolute;
    }
  }
  @media (max-width: 599px) {
    .blob::before {
      transform: rotate(150deg);
      left: unset;
      right: -100px;
      top: -30px;
    }
  }
</style>
