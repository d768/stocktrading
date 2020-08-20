import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {mapActions, mapGetters} from "vuex";
import stockheader from './components/stock-header-component.vue'

Vue.config.productionTip = false

Vue.component('stockheader', stockheader )

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
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    this.$store.dispatch('populateStocks');
  }
}).$mount('#app')
