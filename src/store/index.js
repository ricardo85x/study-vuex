import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      first_name: "Ricardo",
      last_name: "T",
      email: "ricardo@email.com",
    },
    cart: [],
  },
  getters: {},
  mutations: {
    // Cart
    addProduct(state, payload) {
      const productIndex = state.cart.findIndex((c) => c.id === payload.id);
      if (productIndex === -1) {
        state.cart.push({ ...payload, qtd: 1 });
      } else {
        state.cart[productIndex].qtd++;
      }
    },

    // User
    saveFirstName(state, payload) {
      console.log(state, payload);
      state.user.first_name = payload;
    },
    saveLastName(state, payload) {
      state.user.last_name = payload;
    },
  },
  actions: {
    saveFirstName(ctx, payload) {
      ctx.commit("saveFirstName", payload);
    },
  },
  modules: {},
});
