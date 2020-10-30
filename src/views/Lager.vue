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
  name: 'Lager',
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
export default class Lager extends Vue {
  blocks: Block[] = [
    {
      type: BlockType.SECTION,
      data: {
        id: 'intro',
        blob: true,
        right: {
          type: BlockSection.TEXT,
          data: {
            heading: 'Best på service - der du trenger oss',
            text: [
              {
                content: 'Vi har drevet transporttjenester i Oslo og omegn siden 2002, på alle biltyper fra budbiler til store lastebiler. Våre ansatte, vårt miljø og vårt fokus på kvalitet har gitt oss en lojal kundebase som deler våre verdier.'
              },
              {
                content: 'Kvalitet og service i alle ledd',
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
      type: BlockType.SECTION,
      data: {
        id: 'lager',
        blob: false,
        right: {
          type: BlockSection.IMAGE,
          data: {
            src: require('@/assets/images/lager/lager.jpg'),
            alt: 'Vårt lager'
          }
        },
        left: {
          type: BlockSection.TEXT,
          data: {
            heading: 'Lager',
            text: [
              {
                content: 'Vårt lager ligger sentralt plassert i Furuset Næringspark, i Professor Birkelands vei i Oslo. Lokasjonen i nærheten til to av Oslos største hovedårer (E6 og Østre Aker vei) gjør at lageret er praktisk for både kundene våre og oss. \n' +
                  'I likhet med de øvrige tjenestene vi leverer, er også dette tilgjengelig 24 timer i døgnet alle årets dager!\n'
              },
              {
                content: 'Lageret har rikelig med plass, både i pallereoler og på gulvet. Ta kontakt for en uforpliktende prat, så finner vi en god løsning for deres behov. '
              }
            ]
          }
        }
      }
    },
    {
      type: BlockType.SECTION,
      data: {
        id: 'vi-tilbyr',
        blob: false,
        right: {
          type: BlockSection.TEXT,
          data: {
            text: [
              {
                content: 'Vi er tilgjengelig 24 timer i døgnet, alle årets dager. Booking kan gjennomføres over telefon, e-post, kundeweb eller EDI, og våre løsninger gir deg mulighet til å følge opp f.eks. POD (Proof of delivery), sendingsstatus og fakturaer, i tillegg til at både fraktbrev og merkelapper til godset kan skrives ut umiddelbart etter booking.\n' +
                  'Ta kontakt for en uforpliktende prat, så finner vi en løsning som passer nettopp ditt behov.\n'
              }
            ]
          }
        },
        left: {
          type: BlockSection.TEXT,
          data: {
            heading: 'Hva vi tilbyr',
            text: [
              {
                content: 'Booking via kundeweb, EDI, telefon og e-post',
                icon: 'checkmark'
              },
              {
                content: 'Fraktbrev, merkelapper og fakturaer',
                icon: 'checkmark'
              },
              {
                content: 'POD (Proof of delivery) og sendingsstatus',
                icon: 'checkmark'
              }
            ]
          }
        }
      }
    },
    {
      type: BlockType.SCHEMA,
      data: {
        id: 'skjema',
        background: 'white',
        selected: 'Lager'
      }
    }
  ]

  track = (): void => {
    page('/lager')
  }
}
</script>

<style lang="scss">
body {
  overflow: hidden;
}
</style>
