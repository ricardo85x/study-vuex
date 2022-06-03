<template>
  <div class="flex flex-col gap-2 m-5">
    <div class="flex gap-2">
      <div
        v-for="product in products"
        :key="product.id"
        class="flex flex-col content-between w-64 gap-1 border border-gray-200"
      >
        <div class="h-64 bg-gray-700"></div>
        <div class="p-4">{{ product.title }}</div>
        <div class="flex flex-row items-center justify-between p-4">
          <button
            class="p-2 border border-2 rounded-md hover:bg-gray-100"
            @click="addToCart(product)"
          >
            Adicionar
          </button>
          <span>{{ showqtd(product.id) }} in cart </span>
        </div>
      </div>
    </div>

    <hr class="my-10" />

    <div class="text-3xl font-bold">Name: {{ fullName }}</div>
    <div class="flex flex-row gap-2">
      <label for="">First Name</label>
      <input
        class="pl-2 border border-gray-500 rounded"
        type="text"
        v-model="firstName"
        placeholder="First Name"
      />
    </div>
    <div class="flex flex-row gap-2">
      <label for="">Last Name</label>
      <input
        class="pl-2 border border-gray-500 rounded"
        type="text"
        v-model="lastName"
        placeholder="Last Name"
      />
    </div>
    <button
      class="w-48 p-3 bg-gray-200 rounded-md hover:bg-gray-100"
      @click="updateName"
    >
      Reset First Name
    </button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "App",
  data() {
    return {
      myName: "",
      products: [
        { id: 1, title: "Product 1" },
        { id: 2, title: "Product 2" },
        { id: 3, title: "Product 3" },
      ],
    };
  },

  methods: {
    ...mapMutations(["ADD_PRODUCT", "SAVE_FIRST_NAME", "SAVE_LAST_NAME"]),
    ...mapActions(["saveFirstName"]),
    updateName() {
      console.log("updating name");

      // action
      this.saveFirstName("Ricks");

      // mutation
      // this.$store.commit("saveFirstName", this.myName);
    },
    addToCart(product) {
      // this.$store.commit("addProduct", product);
      this.ADD_PRODUCT(product);
    },

    showqtd(productId) {
      return this.cart.find((p) => p.id === productId)?.qtd || 0;
    },
  },

  computed: {
    ...mapGetters(["fullName"]),
    ...mapState({
      user: (state) => state.user,
      cart: (state) => state.cart,
    }),
    firstName: {
      get() {
        return this.user.first_name;
      },
      set(value) {
        this.SAVE_FIRST_NAME(value);
      },
    },
    lastName: {
      get() {
        return this.user.last_name;
      },
      set(value) {
        this.SAVE_LAST_NAME(value);
      },
    },
  },
};
</script>
