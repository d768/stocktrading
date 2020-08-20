import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import stockheader
  from './components/stock-header-component.vue';
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    ...mapActions([
        'buy',
        'sell'
    ])
  },
  computed: {
    ...mapGetters([
      'boughtStocks',
      'availableStocks',
      'funds'
    ])
  },
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
