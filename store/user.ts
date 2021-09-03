import { Commit } from 'vuex'

interface User {
  name: string,
  email: string,
}

export default interface State {
  user: User | null
}

export const state = (): State => ({
  user: null
})

export const mutations = {
  setUser(state: State, user: User) {
    state.user = user
  }
}

export const actions = {
  signIn({ commit }: { commit: Commit }, user: User) {
    commit('setUser', user)
  },
  signOut({ commit }: { commit: Commit }) {
    commit('setUser', null)
  }
}


