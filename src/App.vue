<template>
  <div id="app">
    <!-- Root Foo: {{rootFoo}} <br/> Robots Foo: {{robotsFoo}} <br/> Users Foo: {{usersFoo}} <br/> Root Getter Foo: {{rootGetterFoo}} <br/> Robots Getter Foo: {{robotsGetterFoo}} <br/> Users Getter Foo: {{usersGetterFoo}} <br/> -->

    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link :to="{name: 'Home'}" class="nav-link" exact>
              <img src="./assets/build-a-bot-logo.png" class="logo" alt="build-a-bot">Build-a-Bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Build'}" class="nav-link" exact>
              Build
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'BrowseParts'}" class="nav-link" exact>
              Parts
            </router-link>
          </li>
          <li class="nav-item cart">
            <router-link to="/cart" class="nav-link" exact>
              Cart
            </router-link>
            <div class="cart-items">
              {{cart.length}}
            </div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar"></router-view>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapState } from 'vuex';

export default Vue.extend({
  name: 'app',
  computed: {
    cart() {
      return this.$store.state.robots.cart;
    },
    // These mapStates are equivalent to
    //the commented computeds below
    ...mapState({
      rootFoo: 'foo',
      robotsFoo: state => state.robots.foo,
    }),
    ...mapState('users', { usersFoo: 'foo' }),
    // rootFoo() {
    //   return this.$store.state.foo;
    // },
    // robotsFoo() {
    //   return this.$store.state.robots.foo;
    // },
    // usersFoo() {
    //   return this.$store.state.users.foo;
    // },
    ...mapGetters({
      rootGetterFoo: 'foo',
    }),
    ...mapGetters('robots', { robotsGetterFoo: 'foo' }),
    ...mapGetters('users', { usersGetterFoo: 'foo' }),
    // rootGetterFoo() {
    //   return this.$store.getters.foo;
    // },
    // robotsGetterFoo() {
    //   return this.$store.getters['robots/foo'];
    // },
    // usersGetterFoo() {
    //   return this.$store.getters['users/foo'];
    // },
  },
});
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
main {
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}
header {
  background-color: #999;
  padding: 0 30px 0 30px;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: white;
}
.container {
  display: flex;
  margin: 10ps auto 0 auto;
  justify-content: center;
}
.aside {
  padding: 30px;
  background-color: gray;
  width: 100px;
  min-height: 300px;
}
.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}
.cart-items {
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumseagreen;
}
</style>
