import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#intro',
   data: {
      message: 'My first VueJS Task'
   },
  render: h => h(App),
}).$mount('#app')
