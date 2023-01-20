import Vue from 'vue'
import MainApp from '@/MainApp.vue'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(MainApp),
}).$mount('#app')
