import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
  store,  // Vuex will detect this top-level store and inject as $store into child components.
  el: '#app',
  render: h => h(App)
})
