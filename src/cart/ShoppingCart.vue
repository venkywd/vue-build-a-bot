<template>
  <div>
    <h1>Cart</h1>
    <RobotList :items="cart" />
    <h2 class="sale-items">You saved money on these robots</h2>
    <RobotList :items="cartSaleItems" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import RobotList from './RobotList.vue';

export default Vue.extend({
  name: 'Cart',
  components: { RobotList },
  computed: {
    cart() {
      return this.$store.state.robots.cart;
    },
    cartSaleItems() {
      return this.$store.getters['robots/cartSaleItems'];
    },
  },
});
</script>

<style scoped>
td,
th {
  padding: 5px;
}
.robot-title {
  text-align: left;
  padding-right: 200px;
}
.cost {
  text-align: right;
}
.sale-items {
  margin-top: 50px;
  font-size: 18px;
  color: red;
}
</style>
