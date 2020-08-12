import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { rankModule } from './rankStore/rankModule'

export default new Vuex.Store({
  state: {
    username: null,
  },
  modules: {
    rankModule,
  }
})
