import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from '@/assets/scss/variables.scss'
import Checkmark from '@/assets/images/Checkmark.vue'
import Phone from '@/assets/images/Phone.vue'
import Mail from '@/assets/images/Mail.vue'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    values: {
      checkmark: {
        component: Checkmark
      },
      mail: {
        component: Mail
      },
      phone: {
        component: Phone
      }
    }
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        orange: colors.orange,
        black: colors.black,
        blue: colors.blue,
        blueLight: colors.blueLight,
        white: colors.white,
        lightGrey: colors.greyLight
      }
    }
  }
})
