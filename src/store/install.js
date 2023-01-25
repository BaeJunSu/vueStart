import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todolist: [],
    targetList: [],
  },
  actions: {
    SET_TODOLIST: ({ commit }, payload) => {
      commit('SET_TODOLIST', payload)
    },
    SET_TODOITEM: ({ commit }, payload) => {
      commit('SET_TODOITEM', payload)
    },
    MODIFY_TODOITEM: ({ commit }, payload) => {
      commit('MODIFY_TODOITEM', payload)
    },
  },
  mutations: {
    SET_TODOLIST: (state, payload) => {
      state.todolist = payload
      console.log('SET_TODOLIST', state.todolist)
    },
    SET_TODOITEM: (state, payload) => {
      state.todolist.push(payload)
      console.log('SET_TODOITEM', state.todolist)
    },
    MODIFY_TODOITEM: (state, payload) => {
      const idx = state.todolist.findIndex(
        (item) =>
          item.workName === payload.preData.workName &&
          item.targetName === payload.preData.targetName,
      )
      console.log('MODIFY_TODOITEM', idx)
      if (idx > -1) {
        state.todolist.splice(idx, 1)
        state.todolist.push(payload.newData)
        console.log('MODIFY_TODOITEM', state.todolist)
      }
    },
  },
  getters: {
    getItems: (state) => {
      return state.todolist
    },
    getTargets: (state) => {
      return state.targetList
    },
  },
})
