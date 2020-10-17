<template>
  <div>
    <Navbar />
    <v-main class="app__body">
      <component
        v-for="(block, i) in blocks"
        :is="block.type"
        :data="block.data"
        :key="i"
      />
    </v-main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/Navbar.vue'
import Cards from '@/components/Blocks/Cards/Cards.vue'
import Section from '@/components/Blocks/Section/Section.vue'
import Component from 'vue-class-component'
import { Block, BlockSection, BlockType } from '@/components/types'
import Schema from '@/components/Blocks/Schema/Schema.vue'
import Head from '@/components/Head.vue'
import { page } from 'vue-analytics'
import Contacts from '@/components/Blocks/Contacts/Contacts.vue'
import Footer from '@/components/Footer.vue'

  @Component({
    name: 'Index',
    components: {
      Schema,
      Navbar,
      Section,
      Head,
      Cards,
      Contacts,
      Footer
    }
  })
export default class Index extends Vue {
  blocks: Block[] = [
    {
      type: BlockType.HEAD
    },
    {
      type: BlockType.SECTION,
      data: {
        id: 'intro',
        blob: true,
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
                content: 'Våre lojale medarbeidere gjør oppdraget som om det var for deres egen mor. Fra A - B uten snarveier',
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
      type: BlockType.CARDS,
      data: {
        id: 'tjenester',
        title: 'Våre tjenester',
        caption: 'Vi spesialiserer oss på logistikktjenester',
        cards: [
          {
            title: 'Transport',
            text: 'Vi tilbyr transport med flere forskjellige biltyper. Alt fra små budbiler til tunge lastebilder med sideåpning. Ta kontakt så finner vi det rette for deg.',
            image: {
              src: require('@/assets/images/truck.svg'),
              alt: 'Illustrasjon av Best Service lastebil fra siden'
            },
            button: {
              text: 'Les mer',
              href: '/transport'
            }
          },
          {
            title: 'Lager',
            text: 'Vi tilbyr lagerplasser for både kort- og langtidsleie i Oslo, lokalisert i Furuset næringspark. Vår døgnåpne telefon gjør at lageret kan stilles klart i løpet av 30 minutter hele døgnet - hele året.',
            image: {
              src: require('@/assets/images/storage.svg'),
              alt: 'En palltruck fra siden med en mann'
            },
            button: {
              text: 'Les mer',
              href: '/lager'
            }
          },
          {
            title: 'Avfall og makulering',
            text: 'Vi tilbyr fjerning og transport av de aller fleste typer avfall, og har samarbeidsavtale med sentrale aktører i Oslo-området. Vårt fokus er spesielt på EE-Avfall og sikkerhetsmakulering.',
            image: {
              src: require('@/assets/images/waste.svg'),
              alt: 'Søppelkasse'
            },
            button: {
              text: 'Les mer',
              href: '/avfall'
            }
          }
        ]
      }
    },
    {
      type: BlockType.SECTION,
      data: {
        id: 'om-oss',
        background: 'white',
        blob: false,
        left: {
          type: BlockSection.TEXT,
          data: {
            heading: 'Om oss',
            text: [
              {
                content: 'Vi i Best Service skal være best på gjennomføring, punktlighet, kvalitet og service. Oppgavene utføres til fornuftige og konkurransedyktige priser og vi har dyktige, løsningsorienterte serviceinnstilte medarbeidere.'
              },
              {
                content: '<i>Senk skuldrene - vi fikser!</i>'
              }
            ]
          }
        },
        right: {
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
      data: {
        id: 'skjema',
        background: 'white'
      }
    },
    {
      type: BlockType.CONTACTS,
      data: {
        id: 'kontakt',
        background: 'white',
        title: 'Kontakt oss',
        contacts: [
          {
            title: 'Kjørekontor',
            name: 'Ronald Weiby',
            email: 'ronald@best-service.no',
            phone: 92893696,
            image: {
              src: require('@/assets/images/ronald.jpg'),
              alt: 'Ronald Weiby'
            }
          },
          {
            title: 'Kjørekontor',
            name: 'Morten Skårstad',
            email: 'morten@best-service.no',
            phone: 90018275,
            image: {
              src: require('@/assets/images/morten.jpg'),
              alt: 'Morten Skårstad'
            }
          }
        ]
      }
    }
  ]

  track = (): void => {
    page('/')
  }
}
</script>

<style lang="scss">
  body {
    overflow: hidden;
  }
</style>
