import Vue from 'vue';
import Vuex from 'vuex';
import { api, gens } from '@/utils';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    view: '',
    lastView: '',
    gen1: null,
    gen2: null,
    gen3: null,
    gen4: null,
    gen5: null,
    single: null,
    singleSpecies: null,
    singleEvolution: null,
  },

  actions: {
    setView({ commit }, view) {
      // console.log('📣: setView -> view', view);
      commit('SET_LAST_VIEW', store.state.view);
      commit('SET_VIEW', view);
    },

    setGen1({ commit }) {
      return api
        .get(`/pokemon`, { params: { offset: gens[0].offset, limit: gens[0].limit } })
        .then(response => commit('SET_GEN_1', response.data))
        .catch(error => console.error(`📣: setGen1 -> error`, error));
    },

    setGen2({ commit }) {
      return api
        .get(`/pokemon`, { params: { offset: gens[1].offset, limit: gens[1].limit } })
        .then(response => commit('SET_GEN_2', response.data))
        .catch(error => console.error(`📣: setGen2 -> error`, error));
    },

    setGen3({ commit }) {
      return api
        .get(`/pokemon`, { params: { offset: gens[2].offset, limit: gens[2].limit } })
        .then(response => commit('SET_GEN_3', response.data))
        .catch(error => console.error(`📣: setGen3 -> error`, error));
    },

    setGen4({ commit }) {
      return api
        .get(`/pokemon`, { params: { offset: gens[3].offset, limit: gens[3].limit } })
        .then(response => commit('SET_GEN_4', response.data))
        .catch(error => console.error(`📣: setGen4 -> error`, error));
    },

    setGen5({ commit }) {
      return api
        .get(`/pokemon`, { params: { offset: gens[4].offset, limit: gens[4].limit } })
        .then(response => commit('SET_GEN_5', response.data))
        .catch(error => console.error(`📣: setGen5 -> error`, error));
    },

    setSingle({ commit }, id) {
      commit('SET_SINGLE', null);
      return api
        .get(`/pokemon/${id}`)
        .then(response => commit('SET_SINGLE', response.data))
        .catch(error => console.error(`📣: setSingle -> error`, error));
    },

    setSingleSpecies({ commit }, id) {
      commit('SET_SINGLE_SPECIES', null);
      return api
        .get(`/pokemon-species/${id}`)
        .then(response => commit('SET_SINGLE_SPECIES', response.data))
        .catch(error => console.error(`📣: setSingleSpecies -> error`, error));
    },

    setSingleEvolution({ commit }, id) {
      commit('SET_SINGLE_EVOLUTION', null);
      return api
        .get(`/evolution-chain/${id}`)
        .then(response => commit('SET_SINGLE_EVOLUTION', response.data))
        .catch(error => console.error(`📣: setSingleEvolution -> error`, error));
    },
  },

  mutations: {
    SET_VIEW: (state, payload) => {
      state.view = payload;
    },
    SET_LAST_VIEW: (state, payload) => {
      state.lastView = payload;
    },
    SET_GEN_1: (state, payload) => {
      state.gen1 = payload.results;
    },
    SET_GEN_2: (state, payload) => {
      state.gen2 = payload.results;
    },
    SET_GEN_3: (state, payload) => {
      state.gen3 = payload.results;
    },
    SET_GEN_4: (state, payload) => {
      state.gen4 = payload.results;
    },
    SET_GEN_5: (state, payload) => {
      state.gen5 = payload.results;
    },
    SET_SINGLE: (state, payload) => {
      state.single = payload;
    },
    SET_SINGLE_SPECIES: (state, payload) => {
      state.singleSpecies = payload;
    },
    SET_SINGLE_EVOLUTION: (state, payload) => {
      state.singleEvolution = payload;
    },
  },
});

export default store;
