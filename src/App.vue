<template>
  <div class="m-5 flex flex-col gap-2">
    <div class="flex gap-2">
      <div
        v-for="product in products"
        :key="product.id"
        class="flex flex-col gap-1 content-between w-64 border border-gray-200"
      >
        <div class="bg-gray-700 h-64"></div>
        <div class="p-4">{{ product.title }}</div>
        <div class="p-4 flex flex-row justify-between items-center">
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

    <div class="text-3xl font-bold">
      Name: {{ $store.state.user.first_name }} {{ $store.state.user.last_name }}
    </div>
    <div class="flex flex-row gap-2">
      <label for="">First Name</label>
      <input
        class="border border-gray-500 rounded pl-2"
        type="text"
        v-model="firstName"
        placeholder="First Name"
      />
    </div>
    <div class="flex flex-row gap-2">
      <label for="">Last Name</label>
      <input
        class="border border-gray-500 rounded pl-2"
        type="text"
        v-model="lastName"
        placeholder="Last Name"
      />
    </div>
    <button
      class="bg-gray-200 hover:bg-gray-100 p-3 rounded-md"
      @click="updateName"
    >
      Save
    </button>
  </div>
</template>

<script>
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
    updateName() {
      console.log("updating name");

      // action
      // this.$store.dispatch("saveFirstName", this.myName);

      // mutation
      // this.$store.commit("saveFirstName", this.myName);
    },
    addToCart(product) {
      this.$store.commit("addProduct", product);
    },

    showqtd(productId) {
      return this.$store.state.cart.find((p) => p.id === productId)?.qtd || 0;
    },
  },

  computed: {
    firstName: {
      get() {
        return this.$store.state.user.first_name;
      },
      set(value) {
        this.$store.commit("saveFirstName", value);
      },
    },
    lastName: {
      get() {
        return this.$store.state.user.last_name;
      },
      set(value) {
        this.$store.commit("saveLastName", value);
      },
    },
  },
};
</script>
