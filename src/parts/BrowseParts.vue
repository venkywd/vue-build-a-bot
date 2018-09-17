<template>
  <div>
    <h1>Browse Parts</h1>
    <ul class="menu">
      <li>
        <router-link :to="{name: 'BrowseHeads'}" class="nav-link" exact>Heads </router-link>
      </li>
      <li>
        <router-link :to="{name: 'BrowseArms'}" class="nav-link" exact>Arms</router-link>
      </li>
      <li>
        <router-link :to="{name: 'BrowseTorsos'}" class="nav-link" exact>Torsos</router-link>
      </li>
      <li>
        <router-link :to="{name: 'BrowseBases'}" class="nav-link" exact>Bases</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BrowseParts',
});
</script>

<style scoped>
h1 {
  text-align: center;
}
.menu {
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
  font-size: 20px;
}
ul {
  list-style-type: none;
}
a {
  color: palevioletred;
}
.nav-link {
  text-decoration: none;
  color: palevioletred;
}
.router-link-active {
  color: #333;
}
</style>
