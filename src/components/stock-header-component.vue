<template>
  <div id="nav">
    <router-link to="/">Stock Trader</router-link> |
    <router-link to="/portfolio">Portfolio</router-link> |
    <router-link to="/stocks">Stocks</router-link> |
    <button>End Day</button> |
    <button>Save & Load</button> |
    <div>Funds: 0</div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'stockheader',
  props: {
  },
});
</script>

<style scoped>
</style>
