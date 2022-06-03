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
  getters: {
    fullName(state) {
      return `${state.user.first_name} ${state.user.last_name}`;
    },
  },
  mutations: {
    // Cart
    ADD_PRODUCT(state, payload) {
      const productIndex = state.cart.findIndex((c) => c.id === payload.id);
      if (productIndex === -1) {
        state.cart.push({ ...payload, qtd: 1 });
      } else {
        state.cart[productIndex].qtd++;
      }
    },

    // User
    SAVE_FIRST_NAME(state, payload) {
      console.log(state, payload);
      state.user.first_name = payload;
    },
    SAVE_LAST_NAME(state, payload) {
      state.user.last_name = payload;
    },
  },
  actions: {
    saveFirstName(ctx, payload) {
      ctx.commit("SAVE_FIRST_NAME", payload);
    },
  },
  modules: {},
});
