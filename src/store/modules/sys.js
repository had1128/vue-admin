// initial state
const state = {
  menu: [],
  password: null
}

// getters
const getters = {
}

// mutations
const mutations = {
  setMenu (state, payload) {
    state.menu = payload
  },
  savePassword(state, payload){
    state.password = payload
  }
}

// actions
const actions = {
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
