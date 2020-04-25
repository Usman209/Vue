import Vue from 'vue'
import App from './App.vue' //2. here we export our file 
import Code from './components/Code.vue'
import Header from './components/Header.vue'

Vue.component('codey',Code)    // globally imported components 
Vue.component('header1',Header)

export const bus =new Vue();


Vue.config.productionTip = false

new Vue({
  el: '#app',
   data: {
      message: 'My first VueJS Task'
   },
  render: h => h(App),
}).$mount('#app')
