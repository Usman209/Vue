import Vue from 'vue'
import App from './App.vue' //2. here we export our file 
import Code from './components/Code.vue'
import Header from './components/Header.vue'

Vue.component('codey',Code)
Vue.component('header1',Header)

Vue.config.productionTip = false

new Vue({
  el: '#app',
   data: {
      message: 'My first VueJS Task'
   },
  render: h => h(App),
}).$mount('#app')
