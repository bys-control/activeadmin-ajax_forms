// initial state
const state = {
  count: 0
}

// mutations
const mutations = {
  INCREMENT_COUNTER: function (state, n = 1) {
    state.count += n
  }
}

export default {
  state,
  mutations
}
