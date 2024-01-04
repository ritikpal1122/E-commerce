<template>
  <div id="app">
    <!-- <BuyPage/>
    <HomePage/>
    <ItemCart/> -->
    <!-- <LoginPage/> -->
    <router-view></router-view>
    <!-- <router-view @add-to-cart="addToCart" />
    <NavBar :cartCount="cartCount" /> -->

    <!-- <NavBar/>
    <PaymentOption/> -->
  </div>
</template>

<script>
// import BuyPage from './components/BuyPage.vue';
// import HomePage from './components/HomePage.vue';
// import ItemCart from './components/ItemCart.vue';
// import LoginPage from './components/LoginPage.vue';
// import NavBar from './components/NavBar.vue';
// import PaymentOption from './components/PaymentOption.vue';

export default {
  name: "App",
  components: {
    // BuyPage,
    // HomePage,
    // ItemCart,
    // LoginPage,
    // NavBar,
    // PaymentOption
  },
  data() {
    return {
      cartCount: 0,
    };
  },
  methods: {
    addToCart() {
      this.cartCount++;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
