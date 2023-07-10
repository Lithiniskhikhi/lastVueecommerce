import { createStore } from 'vuex'

export default createStore({
  state: {
    Music: null
  },
  getters: {
  },
  mutations: {
    setMusic(state, Music){
      state.Music = Music
    }
  },
  actions: {
    async fetchMusic(context){
      try {
        let res = await fetch('https://lithiniskhikhi.github.io/E-commercejson/index.json')
        let {Music} = await res.json()
        context.commit("setMusic", Music)
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})