import Vue from "vue";
import Vuex from "vuex";

import products from "../data/products";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    funds: 1000000,
    products: [],
    cartProducts: [],
    ownedProducts: [],
  },
  mutations: {
    setProducts(state, products) {
      for (let product of products) {
        product.in_cart = false;
        product.owned = false;
        product.too_expensive = product.price > state.funds;
        state.products.push(product);
      }
    },
    addToCart(state, productId) {
      let product = state.products.find((p) => p.id === productId);

      state.cartProducts.push(productId);
      product.in_cart = true;
      state.funds -= product.price;
    },
    removeFromCart(state, productId) {
      let product = state.products.find((p) => p.id === productId);
      let index = state.cartProducts.indexOf(productId);

      state.cartProducts.splice(index, 1);
      product.in_cart = false;
      state.funds += product.price;
    },
    updateProducts(state) {
      for (let product of state.products) {
        product.too_expensive = product.price > state.funds;
      }
    },
    buyProducts(state) {
      for (let productId of state.cartProducts) {
        let product = state.products.find((p) => p.id === productId);
        product.in_cart = false;
        product.owned = true;
        state.ownedProducts.push(productId);
      }
      state.cartProducts = [];
    },
  },
  actions: {
    loadProducts({ commit }) {
      commit("setProducts", products);
    },
    addToCart({ commit, state }, productId) {
      let product = state.products.find((p) => p.id === productId);
      if (
        product &&
        product.in_cart === false &&
        product.owned === false &&
        product.too_expensive === false
      ) {
        commit("addToCart", productId);
        commit("updateProducts");
      }
    },
    removeFromCart({ commit }, productId) {
      commit("removeFromCart", productId);
    },
    buy({ commit }) {
      commit("buyProducts");
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    funds(state) {
      return state.funds;
    },
    cartProducts(state) {
      let products = [];

      for (let productId of state.cartProducts) {
        let product = state.products.find((p) => p.id === productId);
        if (product) {
          products.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
          });
        }
      }

      return products;
    },
  },
  modules: {},
});
