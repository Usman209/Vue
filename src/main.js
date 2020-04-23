import Vue from 'vue'
import App from './App.vue' //2. here we export our file 

Vue.config.productionTip = false

new Vue({
  el: '#app',
   data: {
      message: 'My first VueJS Task'
   },
  render: h => h(App),
}).$mount('#app')
