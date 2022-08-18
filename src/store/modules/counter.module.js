export default {
  namespaced: true,
  state: {
    counter: {
      count: 0,
    },
  },
  mutations: {
    INC_COUNTER(state) {
      state.counter.count = state.counter.count + 1;
    },
    DEC_COUNTER(state) {
      state.counter.count = state.counter.count - 1;
    },
    INC_COUNTER_BY(state, payload) {
      state.counter.count = state.counter.count + payload.value;
    },
  },
  actions: {
    incCounter({ commit }) {
      return commit('INC_COUNTER');
    },
    decCounter({ commit }) {
      return commit('DEC_COUNTER');
    },
    incCounterBy({ commit }, payload) {
      return commit('INC_COUNTER_BY', payload);
    },
  },
};
