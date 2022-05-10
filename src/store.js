import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: true,
    kakaoAccount: false,
    otherAccount: false,
    modalCase: false,
    stock: [
      {
        id: '1',
        name: '카카오뱅크1',
        price: 19431,
        percentage: 22.87,
        src: 'https://kr.vuejs.org/images/logo.png'
      },
      {
        id: '2',
        name: '카카오뱅크2',
        price: 19431,
        percentage: 22.87,
        src: 'https://kr.vuejs.org/images/logo.png'
      },
      {
        id: '3',
        name: '카카오뱅크3',
        price: 19431,
        percentage: 22.87,
        src: 'https://kr.vuejs.org/images/logo.png'
      }
    ]
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
    }
  },
  actions: {
    formatPrice(price) {
      return price.toLocaleString('ko-KR');
    }
  }
});
