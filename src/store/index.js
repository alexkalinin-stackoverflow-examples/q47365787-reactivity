import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  loaded: false
};

const getters = {
  isLoaded: state => state.loaded,
};

const mutations = {
  toggleLoaded: (state) => {
    state.loaded = !state.loaded;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  // actions,
  getters,
  strict: true
});
