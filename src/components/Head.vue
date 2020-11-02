<template>
  <div class="app__head index__top py-15">
    <v-container>
      <v-row id="top" class="py-15 my-5">
        <v-col
          cols="12"
          class="pl-5 pl-sm-15 pl-md-3 pl-lg-3 pl-xl-3"
          style="z-index: 2"
        >
          <div class="index__top-left">
            <h1 class="index__top-header">Vi verdsetter <span ref="text" class="app__head-title-text"></span></h1>
            <p>Levert med tillit og stolthet siden 2002</p>
            <router-link
              to="#skjema"
              class="text-decoration-none"
            >
              <v-btn
                color="orange"
                dark
              >Send mail</v-btn>
            </router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'Head'
})
export default class Head extends Vue {
  $refs!: {
    text: HTMLSpanElement;
  }

  lines = ['punktlighet', 'gjennomføring', 'kvalitet', 'service', 'lojalitet', 'kundene', 'partnere', 'deg']
  currentLine = 0
  speed = 1000
  delay = 5000

  mounted () {
    if (this.$refs.text) {
      this.write(this.$refs.text, 0)
    }
  }

  write = (el: HTMLElement, i: number): void => {
    const text = this.lines[this.currentLine % this.lines.length]
    if (i < text.length) {
      el.innerHTML += text.charAt(i)
      i++
      setTimeout(() => this.write(el, i), this.speed / text.length)
    } else {
      setTimeout(() => this.erase(el, this.speed / text.length), this.delay)
    }
  }

  erase = (el: HTMLElement, speed: number): void => {
    if (el.innerHTML.length > 0) {
      el.innerHTML = el.innerHTML.slice(0, -1)
      setTimeout(() => this.erase(el, speed), speed)
    } else {
      this.currentLine++
      setTimeout(() => this.write(el, 0), 500)
    }
  }
}
</script>

<style scoped lang="scss">
  .index__top {
    position: relative;
    background-image: url("../assets/images/top.svg");
    background-position: 50% 50%;
    background-size: cover;
    .index__top-left {
      margin: 0 auto;
      text-align: right;
      h1 {
        color: #232055;
        position: relative;
        overflow: hidden;
        .app_head-title-cursor {
          animation: pulse 2s infinite;
        }
      }
    }
  }

  @media (max-width: 599px) {
    .index__top {
      .index__top-left {
        transform: translateY(-60px);
        .index__top-header {
          font-size: 26px;
        }
      }
    }
  }
</style>
