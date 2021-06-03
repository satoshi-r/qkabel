export const state = () => ({
    list: [],
    displayedList: [],
});

export const actions = {
    async fetch({commit}, {id}) {
        const data = await fetch(
          `http://localhost:3000/api/groups?id=${id}`
        );
        const list = await data.json();
        commit('setList', list);
    },

    updateList({commit}, list) {
        commit('setList', list);
    },

    updateDisplayedList({commit}, list) {
        commit('setDisplayedList', list);
    },
};

export const mutations = {
    setList(state, list) {
        state.List = list;
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
        return state.List;
    }
};
