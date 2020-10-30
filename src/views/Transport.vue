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
  name: 'Transport',
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
export default class Transport extends Vue {
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
      type: BlockType.CARDS,
      data: {
        id: 'produkter',
        title: 'Våre produkter',
        caption: 'Velg mellom vårt utvalg av kjøretøy',
        cards: [
          {
            title: 'Lastebiler',
            text: 'Vi har lastebiler av alle slag. Fra lett lastebiler med løfelem til tung lastebil med sideåpning',
            image: {
              src: require('@/assets/images/transport/lastebil.jpg'),
              alt: 'Lastebil'
            },
            button: {
              text: 'Les mer',
              href: '/transport#lastebiler'
            }
          },
          {
            title: 'Varebiler',
            text: 'Vi har flotte varebiler for deg som trenger litt mer plass.',
            image: {
              src: require('@/assets/images/transport/varebil.jpg'),
              alt: 'Varebil'
            },
            button: {
              text: 'Les mer',
              href: '/transport#bud-og-varebiler'
            }
          },
          {
            title: 'Budbiler',
            text: 'Våre budbiler og andre kjøretøyer stilles klar innen 2 timer etter booking om ikke annet avtales. Ta kontakt så finner vi det rette for deg!',
            image: {
              src: require('@/assets/images/transport/budbil.jpg'),
              alt: 'Budbil'
            },
            button: {
              text: 'Les mer',
              href: '/transport#bud-og-varebiler'
            }
          }
        ]
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
      type: BlockType.CARDS,
      data: {
        id: 'lastebiler',
        title: 'Lastebiler',
        caption: 'Vi har en lastebil for de fleste behov',
        cards: [
          {
            title: 'Lett lastebil',
            text: 'Våre lett lastebiler har 8 pallers skap, løftelem og kapasitet for nyttelast opp til 900kg',
            image: {
              src: require('@/assets/images/truck.svg'),
              alt: 'Lett lastebil'
            }
          },
          {
            title: 'Lastebil',
            text: 'Våre lastebiler har 15 pallers skap, løftelem og kapasitet for nyttelast opp til 2500kg',
            image: {
              src: require('@/assets/images/truck.svg'),
              alt: 'Lastebil'
            }
          },
          {
            title: 'Tung lastebil',
            text: 'Våre tung lastebiler har 18 pallers skap, sideåpning, løftelem, elektrisk pallejekk for tunge paller og kapasitet for nyttelast opp til 9000 kg',
            image: {
              src: require('@/assets/images/truck.svg'),
              alt: 'Tung lastebil'
            }
          }
        ]
      }
    },
    {
      type: BlockType.SECTION,
      data: {
        id: 'varebil',
        background: 'white',
        blob: false,
        left: {
          type: BlockSection.TEXT,
          data: {
            heading: 'Bud- og varebil',
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
      type: BlockType.CARDS,
      data: {
        id: 'bud-og-varebiler',
        background: 'white',
        title: 'Bud- og varebiler',
        caption: 'Sjekk ut våre forskjellige pakker',
        cards: [
          {
            title: 'Standard',
            text: 'Alle oppdrag utføres innenfor 2 timer etter mottatt booking om ikke annet avtales (Gjelder Oslo). Bestemte tidsrom kan avtales ned til innenfor 1 times luke for opphenting eller utlevering.',
            image: {
              src: require('@/assets/images/transport/lastebil.jpg'),
              alt: 'Lastebil'
            }
          },
          {
            title: 'ASAP',
            text: 'Alle oppdrag utføres så snart som mulig. Bestemte klokkeslett med eksakt oppmøte eller levering',
            image: {
              src: require('@/assets/images/transport/varebil.jpg'),
              alt: 'Varebil'
            }
          },
          {
            title: 'Økonomi',
            text: 'o\tVed samlasting av større antall sendinger. Utlevering samme dag ved booking før 11.00',
            image: {
              src: require('@/assets/images/transport/budbil.jpg'),
              alt: 'Budbil'
            }
          }
        ]
      }
    },
    {
      type: BlockType.SCHEMA,
      data: {
        id: 'skjema',
        background: 'white'
      }
    }
  ]

  track = (): void => {
    page('/transport')
  }
}
</script>

<style lang="scss">
body {
  overflow: hidden;
}
</style>
