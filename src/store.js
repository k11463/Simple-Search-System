import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchTxt: "",
  },
  mutations: {
    setSearchTxt(state, payload) {
      state.searchTxt = payload;
    }
  },
  actions: {

  },
});
