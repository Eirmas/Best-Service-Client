import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'
import vuetify from './plugins/vuetify'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_ANALYTICS_ID,
  sendHitTask: process.env.VUE_APP_NODE_ENV === 'production',
  router
})

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App)
}).$mount('#app')
