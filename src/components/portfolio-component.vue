<template>
  <div>
    <div v-for="stock in boughtStocks" v-bind:key="stock">
      <div >
        Name: {{stock.Name}}
        Price: {{stock.Price}}
        Quantity: {{stock.Quantity}}
      </div>
      <button>Sell</button>
      <hr/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'portfolio',
  props: {
  },
});
</script>

<style scoped>

</style>
