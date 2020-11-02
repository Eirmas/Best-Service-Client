<template>
    <div
      :id="data.id || false"
      :class="[data.background ? data.background : '', 'py-16']"
    >
      <v-container
        style="max-width:900px;"
      >
        <div>
          <h1 class="text-center pb-15 blue--text">Kom i gang</h1>
        </div>
        <div
          ref="scheme"
          style="position:relative;"
        >
          <div
            ref="main"
            class="schema__wrapper"
          >
            <div
              ref="wrapper"
              class="schema__form-wrapper"
            >
              <v-card
                ref="form"
                rounded
                outlined
                elevation="0"
                class="schema__form"
              >
                <div
                  ref="content"
                  class="schema__form-content"
                >
                  <Form
                    :onComplete="animateToggle"
                    :selectedProp="data.selected"
                  />
                </div>
              </v-card>
            </div>
            <div class="schema__letter">
              <div
                ref="letterTop"
                class="schema__letter-top"
              >
                <img
                  src="../../../assets/images/letter-top.svg"
                  alt="Toppen av et brev"
                  aria-hidden="true"
                  @load="onTopLoaded"
                >
              </div>
              <div
                ref="letterBottom"
                class="schema__letter-bottom"
              >
                <img
                  src="../../../assets/images/letter-bottom.svg"
                  alt="Bunnen av et brev"
                  aria-hidden="true"
                  @load="onBottomLoaded"
                >
              </div>
            </div>
          </div>
          <div
            ref="response"
            class="schema__response"
          >
            <div class="schema__response-head">
              <svg
                class="schema__response-cirlce"
                height="120"
                width="120"
              >
                <circle
                  class="schema__response-circle-inner"
                  stroke="#4CAF50"
                  stroke-width="5"
                  fill="transparent"
                  :stroke-dasharray="`${100 * Math.PI} ${100 * Math.PI}`"
                  :stroke-dashoffset="`${100 * Math.PI}`"
                  transform="rotate(-90)"
                  transform-origin="50% 50%"
                  r="50"
                  cx="60"
                  cy="60"
                />
              </svg>
              <v-img
                :src="require('@/assets/images/checkmark.svg')"
                width="35"
                class="schema__response-checkmark"
              />
            </div>
            <div class="schema__response-body">
              <span class="schema__response-body-text">Din mail har blitt sendt. Du vil få svar fortløpende</span>
            </div>
          </div>
        </div>
      </v-container>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Form from '@/components/Blocks/Schema/Form.vue'
import Component from 'vue-class-component'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { Prop } from 'vue-property-decorator'
import { BlockSchemaData } from '@/components/types'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

interface VueElement extends Vue {
  $el: HTMLElement;
}

@Component({
  name: 'Schema',
  components: {
    Form
  }
})
export default class Schema extends Vue {
  @Prop() data!: BlockSchemaData
  $refs!: {
    form: VueElement;
    scheme: HTMLElement;
    response: HTMLElement;
    main: HTMLElement;
    wrapper: HTMLElement;
    content: HTMLElement;
    letterBottom: HTMLElement;
    letterTop: HTMLElement;
  }

  timeline: TimelineLite | undefined = undefined
  topLoaded = false
  bottomLoaded = false

  mounted () {
    window.addEventListener('resize', this.onResize)
  }

  animateToggle () {
    if (this.timeline) {
      if (this.timeline.paused()) {
        const time = this.timeline.time()
        this.resetCard()
        this.timeline.play(time)
      } else if (this.timeline.isActive()) {
        this.timeline.pause()
        const time = this.timeline.time()
        this.resetCard()
        this.timeline.play(time)
      } else {
        this.resetCard()
        this.timeline.restart()
      }
    }
  }

  resetCard () {
    if (this.$refs.scheme && this.$refs.content && this.$refs.form && this.$refs.letterBottom && this.$refs.wrapper && this.$refs.letterTop && this.$refs.main) {
      const scheme = this.elementToObject(this.$refs.scheme)
      const form = this.elementToObject(this.$refs.form.$el)
      const main = this.elementToObject(this.$refs.main)
      const wrapper = this.elementToObject(this.$refs.wrapper)
      const letterBottom = this.elementToObject(this.$refs.letterBottom)
      const content = this.elementToObject(this.$refs.content)
      let letterTop = this.elementToObject(this.$refs.letterTop)
      const scale = (letterBottom.width / wrapper.width) * 0.9
      letterTop.el.style.transform = `rotateX(180deg) scaleY(${(letterTop.height + 10) / (letterTop.height)})`
      letterTop = this.elementToObject(this.$refs.letterTop)
      form.el.style.transform = `scale(${scale})`
      form.el.style.height = `${letterBottom.height}px`
      form.el.style.zIndex = '7'
      form.el.style.top = '0'
      wrapper.el.style.height = `${letterBottom.height}px`
      wrapper.el.style.top = `${letterTop.height / ((letterTop.height + 10) / (letterTop.height))}px`
      letterTop.el.style.zIndex = '12'
      main.el.style.transform = 'scale(0.5) skewX(5deg)'
      main.el.style.left = '-150%'
      scheme.el.style.height = `${content.height}px`
      this.createTimeline()
    }
  }

  onResize () {
    if (this.timeline) {
      if (this.timeline.isActive()) {
        if (!this.timeline.paused()) {
          this.timeline.time(3.062)
        }
      } else if (!this.timeline.paused()) {
        this.resetCard()
      }
    }
  }

  onTopLoaded = () => {
    this.topLoaded = true
    if (this.topLoaded && this.bottomLoaded) {
      this.resetCard()
    }
  }

  onBottomLoaded = () => {
    this.bottomLoaded = true
    if (this.topLoaded && this.bottomLoaded) {
      this.resetCard()
    }
  }

  createTimeline () {
    if (this.$refs.form && this.$refs.letterBottom && this.$refs.wrapper && this.$refs.content && this.$refs.letterTop && this.$refs.main && this.$refs.response) {
      const form = this.elementToObject(this.$refs.form.$el)
      const main = this.elementToObject(this.$refs.main)
      const response = this.elementToObject(this.$refs.response)
      const wrapper = this.elementToObject(this.$refs.wrapper)
      const letterTop = this.elementToObject(this.$refs.letterTop)
      const letterBottom = this.elementToObject(this.$refs.letterBottom)
      const content = this.elementToObject(this.$refs.content)
      const timeline = gsap.timeline({
        scrollTrigger: {
          once: true,
          trigger: this.$refs.main,
          onLeaveBack: self => self.disable()
        }
      })
      const scale = (letterBottom.width / wrapper.width) * 0.9
      timeline.pause()
      timeline.to(main.el, {
        left: `-${main.height * Math.tan(5 * Math.PI / 180)}px`,
        duration: 0.4,
        ease: 'ease-out'
      })
      timeline.to(main.el, {
        left: '0',
        skewX: '0deg',
        duration: 0.2,
        ease: 'ease-out'
      })
      timeline.to(main.el, {
        scale: 1,
        duration: 0.3,
        ease: 'ease-in'
      })
      timeline.to(main.el, {
        scaleX: 1.1,
        scaleY: 0.9,
        bottom: `-${main.height * 0.1}px`,
        ease: 'ease-out',
        duration: 0.3
      })
      timeline.to(letterTop.el, {
        rotateX: '90deg',
        scaleY: 1,
        duration: 0.1,
        ease: 'ease-out',
        filter: 'brightness(0.9)'
      })
      timeline.to(letterTop.el, {
        rotateX: '0deg',
        duration: 0.1,
        ease: 'ease-in',
        filter: 'brightness(1)',
        zIndex: 5
      })
      timeline.to(main.el, {
        scaleX: 0.9,
        scaleY: 1.1,
        bottom: `${main.height * 0.1}px`,
        ease: 'ease-in',
        duration: 0.15
      }, '-=0.2')
      timeline.to(wrapper.el, {
        duration: 0.6,
        top: `-${wrapper.height}px`,
        ease: 'ease-in'
      }, '-=0.05')
      timeline.to(main.el, {
        scaleX: 1,
        scaleY: 1,
        bottom: 0,
        ease: 'bounce',
        duration: 0.15
      }, '-=0.3')
      timeline.to(form.el, {
        zIndex: 100,
        duration: 0
      }, '-=0.2')
      timeline.to(wrapper.el, {
        duration: 0.3,
        top: 0,
        ease: 'ease-out'
      }, '-=0.2')
      timeline.to(form.el, {
        scale: 1,
        ease: 'ease',
        duration: 0.3
      }, '-=0.3')
      timeline.to(form.el, {
        height: `${content.height}px`,
        ease: 'bounce',
        duration: 1
      })
      timeline.to(form.el, {
        height: 'unset',
        ease: 'bounce',
        duration: 1,
        onComplete: () => {
          timeline.pause()
        }
      })
      // Down
      timeline.to(form.el, {
        height: `${content.height}px`,
        ease: 'bounce',
        duration: 0
      })
      timeline.to(window, {
        duration: 0.5,
        ease: 'ease-in-out',
        scrollTo: {
          y: this.$refs.main,
          offsetY: (window.innerHeight - this.$refs.main.offsetHeight) / 2
        }
      })
      timeline.to(form.el, {
        scale: scale,
        height: letterBottom.height,
        ease: 'ease-out',
        duration: 0.3
      }, '-=0.3')
      timeline.to(wrapper.el, {
        top: `-${wrapper.height / 2}px`,
        duration: 0.3
      }, '-=0.3')
      timeline.to(form.el, {
        zIndex: 7,
        duration: 0
      })
      timeline.to(wrapper.el, {
        duration: 0.6,
        top: `${letterBottom.height - (wrapper.height / 2)}px`,
        ease: 'bounce'
      })
      timeline.to(letterTop.el, {
        rotateX: '90deg',
        duration: 0.1,
        ease: 'ease-in',
        filter: 'brightness(0.9)',
        zIndex: 12
      })
      timeline.to(letterTop.el, {
        rotateX: '180deg',
        scaleY: (letterTop.height + 10) / (letterTop.height),
        duration: 0.15,
        ease: 'ease-out',
        filter: 'brightness(1)'
      })
      timeline.to(main.el, {
        scaleX: 1.1,
        scaleY: 0.9,
        bottom: `-${main.height * 0.1}px`,
        ease: 'ease-out',
        duration: 0.1
      })
      timeline.to(main.el, {
        scaleX: 0.95,
        scaleY: 1.05,
        bottom: `${main.height * 0.05}px`,
        ease: 'ease-in',
        duration: 0.15
      })
      timeline.to(main.el, {
        scaleX: 1,
        scaleY: 1,
        bottom: 0,
        ease: 'ease-out',
        duration: 0.1
      })
      timeline.to(main.el, {
        skewX: '5deg',
        scale: 0.5,
        duration: 0.1,
        ease: 'ease-in'
      })
      timeline.to(main.el, {
        left: '150%',
        duration: 0.2,
        ease: 'ease-out'
      })
      timeline.to(response.el, {
        opacity: 1,
        duration: 0.4,
        ease: 'ease-in-out'
      })
      timeline.to('.schema__response-circle-inner', {
        strokeDashoffset: 0,
        duration: 0.4,
        ease: 'ease-in-out'
      })
      timeline.to('.schema__response-checkmark', {
        opacity: 1,
        ease: 'ease-in-out',
        duration: 0.4
      }, '-=0.4')
      timeline.to('.schema__response-checkmark', {
        rotate: 360,
        scale: 1,
        ease: 'back',
        duration: 0.6
      }, '-=0.4')
      timeline.to('.schema__response-body-text', {
        top: 0,
        duration: 0.5,
        ease: 'ease-in-out'
      })
      timeline.to(response.el, {
        opacity: 0,
        duration: 0.4,
        ease: 'ease-in-out',
        delay: 5,
        onComplete: () => {
          this.animateToggle()
        }
      })
      this.timeline = timeline
    }
  }

  elementToObject = (el: HTMLElement) => ({
    el: el,
    width: el.offsetWidth,
    height: el.offsetHeight
  })
}
</script>

<style scoped lang="scss">
  .schema__response {
    pointer-events: none;
    position: absolute;
    opacity: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    .schema__response-head {
      text-align: center;
      position: relative;
      div {
        opacity: 0;
        position: absolute;
        top: calc(50% - 2px);
        left: 50%;
        color: #4CAF50;
        transform: translate(-50%, -50%) scale(0);
      }
    }
    .schema__response-body {
      text-align: center;
      overflow: hidden;
      padding-top: 1rem;
      font-weight: 500;
      span {
        position: relative;
        top: 40px;
      }
    }
  }
  .schema__wrapper {
    position: relative;
    .schema__form-wrapper {
      width: 100%;
      position: absolute;
      margin: auto;
      top: unset;
      .schema__form {
        z-index: 100;
        position: relative;
        width: 100%;
        margin: auto 0;
        overflow-y: hidden;
        top: 50%;
        -webkit-box-shadow: 0 20px 70px 0 rgba(116,134,177,0.2) !important;
        -moz-box-shadow: 0 20px 70px 0 rgba(116,134,177,0.2) !important;
        box-shadow: 0 20px 70px 0 rgba(116,134,177,0.2) !important;
        border: 1px solid #F3D4BD;
        transform: translateY(-50%) scale(1);
        .schema__form-content {
          padding: 1.875rem 2.675rem;
        }
      }
    }
    .schema__letter {
      margin: auto;
      max-width: 700px;
      justify-content: center;
      position: relative;
      .schema__letter-bottom {
        display: flex;
        border-radius: 0 0 10px 10px;
        overflow: hidden;
        position: relative;
        img {
          z-index: 10;
          width: 100%;
          height: 100%;
        }
        &:after {
          content: '';
          width: calc(100% - 2px);
          left: 1px;
          top: -1px;
          height: 90%;
          position: absolute;
          background-color: #E8A27C;
        }
      }
      .schema__letter-top {
        display: flex;
        position: relative;
        filter: brightness(1);
        transform-origin: bottom;
        transform-style: preserve-3d;
        img {
          z-index: 5;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  @media (max-width: 599px) {
    .schema__form-content {
      padding: 1rem !important;
    }
  }
</style>
