import $ from 'jquery'
import Vue from 'vue'
import App from './App'

import 'bootstrap-webpack'
import 'font-awesome-webpack'
import '../stylesheets/style.less'

// Vue.use(VueMdl)
// Vue.config.errorHandler = (e, vm) => {
//   console.log(e, vm)
// }
Vue.config.devtools = true

$('div#main_content').empty().append('<app>')

console.log('Webpack JQuery version: ' + $.fn.jquery)
console.log('Webpack vue version: ' + Vue.version)

/* eslint-disable no-new */
new Vue({
  el: 'div#main_content',
  render: h => h(App)
})
