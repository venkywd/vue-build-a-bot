import Vue from 'vue';
import Vuex from 'vuex';
import robotsModule from './modules/robots';
import usersModule from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
  state: {
    foo: 'root-foo',
  },
  getters: {
    foo(state) {
      return `root-getter${state.foo}`;
    },
  },
});
