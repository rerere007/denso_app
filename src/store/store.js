import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    // 状態を定義
    marker_items: [
    ]
  },
  mutations: {
    TaskFinished: (state, payload) => {
      state.marker_items.forEach(value => {
        if (value.data.title === payload) {
          if (value.flag === true) {
            value.flag = false
          } else if (value.flag === false) {
            value.flag = true
          }
        }
      })
    },
    TaskAdded: (state, payload, msg) => {
      console.log(payload.title)
      state.marker_items.push({
        data: payload,
        flag: false
      })
    }
  },
  actions: {
    TaskFinished: (context, payload) => {
      context.commit('TaskFinished', payload)
    },
    TaskAdded: (context, payload) => {
      context.commit('TaskAdded', payload)
    }
  }
})
