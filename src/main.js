import Vue from 'vue'
import store from './store/install'
import MainApp from '@/MainApp.vue'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(MainApp),
  store,
}).$mount('#app')
