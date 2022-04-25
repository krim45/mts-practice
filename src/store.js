import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    account: true,
    modalCase01: false,
    modalCase02: false,
  },
  mutations: {
    setModalCase(state, payload) {
      state[`modalCase${payload.number}`] = payload.data;
    },
  },
  actions: {},
});
