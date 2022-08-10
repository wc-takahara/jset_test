export const state = () => ({
    count: 1
});

export const mutations = {
    addCount(state) {
        state.count += 1;
        console.log(state.count);
    }
};

export const actions = {
    timerCount({ commit }) {
        setTimeout(function() {
        commit("addCount");
        }, 1000);
    }
};

export const getters = {
    double(state) {
        return state.count * 2;
    }
};