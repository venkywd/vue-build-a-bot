import axios from 'axios';

export default {
  strict: process.env.NODE_ENV !== 'production',
  namespaced: true,
  state: {
    cart: [],
    parts: [],
    foo: 'robots-foo',
  },
  // reducers
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    getParts(state, parts) {
      state.parts = parts;
    },
  },
  actions: {
    // actions let us get to ({ state, getters, commit, dispatch }) {
    getParts({ commit }) {
      axios
        .get('/api/parts')
        .then(result => commit('getParts', result.data))
        .catch(console.error);
    },
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      return axios
        .post('/api/cart', cart)
        .then(() => commit('addRobotToCart', robot))
        .catch(console.error);
    },
  },
  getters: {
    // selectors
    cartSaleItems(state) {
      return state.cart.filter(item => item.head.onSale);
    },
    foo(state) {
      return `robots-getter${state.foo}`;
    },
  },
};
