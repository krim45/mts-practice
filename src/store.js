import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false,
    kakaoAccount: false,
    otherAccount: false,
    modalCase: false,
  },
  mutations: {
    setLogin(state, payload) {
      state.login = payload.data;
    },
    setKakaoAccount(state, payload) {
      state.kakaoAccount = payload.data;
    },
    setOtherAccount(state, payload) {
      state.otherAccount = payload.data;
    },
    setModalCase(state, payload) {
      state.modalCase = payload.data;
    },
  },
  actions: {},
});
