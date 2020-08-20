<template>
  <div>
    <p><b>Trade or View your portfolio</b></p>
    <p>You may Save & Load your data!</p>
    <p>Click on end day to begin new day</p>
    <hr/>
    <p>Your funds: {{funds}}</p>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'home',
  props: {
  },
});
</script>

<style scoped>

</style>
