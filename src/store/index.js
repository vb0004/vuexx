import { createStore } from 'vuex';
import counterModule from './modules/counter.module';
export default createStore({
  state: {
    conterState: counterModule.state,
  },
  mutations: {},
  actions: {},
  getters: {
    getCounterState(state) {
      return state.conterState.counter;
    },
  },
  modules: {
    counterModule,
  },
});
