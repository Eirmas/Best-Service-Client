import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'
import vuetify from './plugins/vuetify'
import store from './store'
import { VueReCaptcha } from 'vue-recaptcha-v3'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-180286010-1',
  sendHitTask: process.env.VUE_APP_NODE_ENV === 'production',
  router
})

Vue.use(VueReCaptcha, {
  siteKey: process.env.VUE_APP_SITE_KEY
})
new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App)
}).$mount('#app')
