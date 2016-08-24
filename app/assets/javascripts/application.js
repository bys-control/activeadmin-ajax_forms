import $ from 'jquery'
import Vue from 'vue/dist/vue.js'
import App from './App'

import 'bootstrap-webpack'
import 'font-awesome-webpack'

Vue.config.devtools = true

$('div#main_content').empty().append('<app>')

console.log('Webpack JQuery version: ' + $.fn.jquery)
console.log('Webpack vue version: ' + Vue.version)

/* eslint-disable no-new */
new Vue({
  el: 'div#main_content',
  components: {
    App
  }
})
