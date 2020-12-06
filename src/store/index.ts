import { createStore } from "vuex";
import { mapToKey } from '@/utils';
import data from '@/mockData';

export default createStore({
  state: {
    takes: {
      fetched: false,
      fetching: false,
      byId: {} as { [key: string]: Take },
      allIds: [] as string[],
    },
  },
  mutations: {
    receiveTakes (state, takes: Take[]) {
      state.takes.allIds = takes.map((take) => take.id);
      state.takes.byId = { ...state.takes.byId, ...mapToKey(takes, "id") };
      state.takes.fetched = true;
      state.takes.fetching = false;
    }
  },
  actions: {
    fetchTakes ({ commit }) {
      commit('receiveTakes', data.takes);
    }
  },
  modules: {}
});

interface Take {
  id: string,
  userId: string,
  message: string,
  createdOn: number,
}
