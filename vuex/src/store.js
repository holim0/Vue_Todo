import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            cnt: 0,
        };
    },

    mutations: {
        plus(state) {
            state.cnt++;
        },
    },
});

export default store;
