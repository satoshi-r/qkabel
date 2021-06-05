export const state = () => ({
  title: "",
  list: [],
  displayedList: []
});

export const actions = {
  async fetch({ commit }, { groups }) {
    try {
      const response = await fetch(`http://localhost:3000/api/groups/?link=${groups}`);
      const data = await response.json();
      const list = data[1];

      commit("setTitle", data[0]);
      commit("setList", list);
      commit("setDisplayedList", list);
    } catch (error) {
      console.log(error);
    }
  },

  updateList({ commit }, list) {
    commit("setList", list);
  },

  updateDisplayedList({ commit }, list) {
    commit("setDisplayedList", list);
  }
};

export const mutations = {
  setTitle(state, title) {
    state.title = title;
  },

  setList(state, list) {
    state.list = list;
  },

  setDisplayedList(state, list) {
    state.displayedList = list;
  }
};

export const getters = {
  getDisplayedList(state) {
    return state.displayedList;
  },

  getList(state) {
    return state.list;
  },

  getTitle(state) {
    return state.title;
  }

};
