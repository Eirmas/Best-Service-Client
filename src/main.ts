import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(VueAnalytics, {
  id: 'UA-180286010-1',
  router
})

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
