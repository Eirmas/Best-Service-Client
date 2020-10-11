<template>
  <div class="app__head index__top py-15">
    <v-container>
      <v-row id="top" class="py-15 my-5">
        <v-col cols="12" style="z-index: 2">
          <div class="index__top-left">
            <h1>Vi verdsetter <span ref="text" class="app__head-title-text">{{ lines[currentLine % lines.length] }}</span></h1>
            <p>Levert med tillit og stolthet siden 2002</p>
            <v-btn
              color="orange"
              dark
            >Send mail</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import gsap from 'gsap'

@Component({
  name: 'Head'
})
export default class Head extends Vue {
  $refs!: {
    text: HTMLSpanElement;
  }

  lines = ['punktlighet', 'gjennomføring', 'kvalitet', 'service', 'lojalitet', 'kundene', 'partnere', 'deg']
  currentLine = 0

  mounted () {
    if (this.$refs.text) {
      const timeline = gsap.timeline()
      timeline.to(this.$refs.text, {
        top: '100%',
        delay: 5,
        duration: 0.4,
        ease: 'ease-out',
        onComplete: () => this.currentLine++
      })
      timeline.to(this.$refs.text, {
        top: '0%',
        duration: 0.6,
        ease: 'back',
        onComplete: () => timeline.restart()
      })
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
      h1 {
        color: #232055;
        position: relative;
        overflow: hidden;
        .app__head-title-text {
          position: absolute;
          padding-left:12px;
        }
      }
    }
  }
</style>
