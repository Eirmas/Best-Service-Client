<template>
  <div>
    <Navbar />
    <Head />
    <div class="app__body">
      <template
        v-for="(block, i) in blocks"
      >
        <Section v-if="block.type === BlockType.SECTION" :data="block.data" :key="i"/>
        <Schema v-if="block.type === BlockType.SCHEMA" :data="block.data" :key="i"/>
        <div class="py-15" :key="i + 100"/>
      </template>
    </div>
    <div class="app__footer">
      <div />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/Navbar.vue'
import Section from '@/components/Blocks/Section/Section.vue'
import Component from 'vue-class-component'
import { BlockType, BlockSection, Block } from '@/components/types'
import Schema from '@/components/Blocks/Schema/Schema.vue'
import Head from '@/components/Head.vue'
import { page } from 'vue-analytics'

@Component({
  name: 'Index',
  components: {
    Schema,
    Navbar,
    Section,
    Head
  }
})
export default class Index extends Vue {
  BlockType = BlockType
  blocks: Block[] = [
    {
      type: BlockType.SECTION,
      data: {
        right: {
          type: BlockSection.TEXT,
          data: {
            heading: 'Best på service',
            text: [
              {
                content: 'Med 18 års erfaring kan du være sikker på at vi leverer som planlagt hver gang',
                icon: 'checkmark'
              },
              {
                content: 'Våre lojale ansatte gjør oppdraget som om det var for deres egen mor. Fra A - B uten snarveier',
                icon: 'checkmark'
              }
            ]
          }
        },
        left: {
          type: BlockSection.IMAGE,
          data: {
            src: require('@/assets/images/image1.jpg'),
            alt: 'Litt av Best Service\'s utvalg av kjøretøy'
          }
        }
      }
    },
    {
      type: BlockType.SCHEMA,
      data: {}
    }
  ]

  track = () => {
    page('/')
  }
}
</script>

<style lang="scss">
</style>
