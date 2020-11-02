<template>
  <div class="contact pt-15">
    <div class="contact__image-wrapper">
      <v-img
        :src="contact.image.src"
        :alt="contact.image.alt"
        height="130"
        width="130"
        eager
        class="contact__image"
      />
    </div>
    <v-card
      elevation="0"
      class="contact__wrapper flex d-flex flex-column pa-8 pt-15"
    >
      <div class="pt-5">
        <h2 class="blue--text text-center" style="font-weight: 600">{{ contact.name }}</h2>
        <h3 class="blue--text text-center" style="font-weight: 400">{{ contact.title }}</h3>
        <div class="contact__info">
          <div class="contact__info-row">
            <div class="contact__info-icon text-center">
              <v-icon small v-text="'$vuetify.icons.phone'"/>
            </div>
            <span>
              <a :href="`tel:+47${contact.phone}`">{{ parsePhoneNumber(contact.phone) }}</a> / <a :href="`tel:+47${22221433}`">{{ parsePhoneNumber(22221433) }}</a></span>
          </div>
          <div class="contact__info-row">
            <div class="contact__info-icon text-center">
              <v-icon small v-text="'$vuetify.icons.mail'"/>
            </div>
            <span><a :href="`mailto:${contact.email}`">{{ contact.email }}</a></span>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { Contact as ContactInterface } from '@/components/types'

@Component({
  name: 'Contact'
})
export default class Contact extends Vue {
  @Prop() contact!: ContactInterface

  parsePhoneNumber = (num: number): string => {
    const match = num.toString().match(/^(\d{3})(\d{2})(\d{3})$/)
    return (match) ? `${match[1]} ${match[2]} ${match[3]}` : num.toString()
  }
}
</script>

<style scoped lang="scss">
  .contact__image-wrapper {
    position: relative;
    .contact__image {
      border-radius: 100%;
      position: absolute;
      width: 130px;
      height: 130px;
      top: 0;
      transform: translate(-50%, -50%);
      left: 50%;
      z-index: 10;
    }
  }
  .contact__wrapper {
    -webkit-box-shadow: 0 20px 70px 0 rgba(116,134,177,0.2) !important;
    -moz-box-shadow: 0 20px 70px 0 rgba(116,134,177,0.2) !important;
    box-shadow: 0 20px 70px 0 rgba(116,134,177,0.2) !important;
    border: 1px solid #F3D4BD;
  }
  .contact .contact__info {
    padding-top: 0.5rem;
    .contact__info-row {
      display: flex;
      padding: 0.5rem 0;
      .contact__info-icon {
        width: 30px;
        height: 30px;
        border: 1px solid #FFCBA1;
        border-radius: 4px;
      }
      span {
        line-height: 30px;
        font-weight: 600;
        padding-left: 1rem;
        a {
          text-decoration: none;
          color: #4C5274;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      &:last-child {
        padding-bottom: 0;
      }
    }
  }
</style>
