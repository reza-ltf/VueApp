const state = {
    listData: null,
};

const getters = {
    getListData: (state) => state.listData,
};

const actions = {
    updateListData: ({ commit }, listData) => {
        commit('setListData', listData);
    },
};

const mutations = {
    setListData: (state, listData) => {
        state.listData = listData;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
