<template>
  <div class="sidebar">
    Standard Sidebar
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Standard',
});
</script>

<style scoped>
.sidebar {
  font-size: 50px;
  transform: rotate(90deg);
}
</style>
