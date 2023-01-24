import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todolist: [],
  },
  actions: {
    SET_TODOLIST: ({ commit }, payload) => {
      commit('SET_TODOLIST', payload)
    },
    SET_TODOITEM: ({ commit }, payload) => {
      commit('SET_TODOITEM', payload)
    },
  },
  mutations: {
    SET_TODOLIST: (state, payload) => {
      state.todolist = payload
      console.log('SET_TODOLIST', state.todolist)
    },
    SET_TODOITEM: (state, payload) => {
      const sesstionData = JSON.parse(sessionStorage.getItem('todolist'))
      sesstionData.push(payload)
      sessionStorage.setItem('todolist', JSON.stringify(sesstionData))
      state.todolist.push(payload)
      console.log('SET_TODOITEM', sesstionData, state.todolist)
    },
  },
  getters: {
    getItems: (state) => {
      return state.todolist
    },
  },
})
