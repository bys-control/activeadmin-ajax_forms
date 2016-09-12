import Vue from 'vue'
import Vuex from 'vuex'

// import parts from modules
import global from './modules/global'
import collections from './modules/collections/collections'

// Make vue aware of Vuex
Vue.use(Vuex)

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  modules: {
    global,
    collections
  }
})
