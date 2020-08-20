import Vue from 'vue'
import Vuex from 'vuex'
import {Stock} from "@/models/stock";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    funds: 100,
    boughtStocks: new Array<Stock>(),
    availableStocks: new Array<Stock>()
  },
  getters: {
    boughtStocks: state => state.boughtStocks,
    availableStocks: state => state.availableStocks,
    funds: state => state.funds
  },
  mutations: {
    buy(state, payload){
      let stock: Stock = payload;
      state.boughtStocks.push(stock);
    },
    sell(state, payload){
      let stock: Stock = payload;
      const index = state.boughtStocks.indexOf(stock, 0);
      if (index > -1) {
        state.boughtStocks.splice(index, 1);
      }
    }
  },
  actions: {
    buy(state, payload){
      state.commit('buy', payload);
    },
    sell(state, payload){
      state.commit('sell', payload);
    }
  },
  modules: {
  }
})
