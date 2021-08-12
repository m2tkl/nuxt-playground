import { Store as VuexStore, Commit } from 'vuex';

export default interface State {
  counter: number;
}

export const state = (): State => ({
  counter: 0
})

export const mutations = {
  increment(state: State) {
    state.counter++
  }
}

export const actions = {
  doIncrement({ commit }: { commit: Commit }) {
    commit('increment')
  }
}

export const getters = {
  getCounter(state: State): number {
    return state.counter
  }
}
