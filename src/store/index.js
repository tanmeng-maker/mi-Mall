import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: JSON.parse(sessionStorage.getItem('username')),
    cartCount: sessionStorage.getItem('cartCount') || 0
  },
  mutations: {
    saveUserName(state, username) {
      state.username = username
      sessionStorage.setItem("username", JSON.stringify(username));
    },
    saveCartCount(state, cartCount) {
      state.cartCount = cartCount
      sessionStorage.setItem("cartCount", JSON.stringify(cartCount));
    }
  },
  actions: {
    saveUserName: ({
      commit
    }, username) => {
      commit('saveUserName', username)
    },
    saveCartCount: ({
      commit
    }, cartCount) => {
      commit('saveCartCount', cartCount)
    }
  },
  modules: {}
})