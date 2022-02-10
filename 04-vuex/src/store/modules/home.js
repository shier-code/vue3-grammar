const homeModule = {
    namespaced: true,
    state() {
        return {
            homeCounter: 10
        }
    },
    getters: {
        doubleHomeCounter(state) {
            return state.homeCounter * 2
        }
    },
    mutations: {
        increament(state) {
            state.homeCounter++
        }
    },
    actions: {

        // eslint-disable
        increamentAction({
            commit
        }) {
            commit("increament")

        }
    }
}

export default homeModule