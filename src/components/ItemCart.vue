<template>
  <div class="item-card">
    <h3>{{ item.name }}</h3>
    <img :src="item.image" alt="Item Image" />
    <p>{{ item.description }}</p>
    <p>Price: ${{ item.price }}</p>
    <button @click="addToCartClicked" class="cart-button">Add to Cart</button>
    <button @click="buyClicked" class="buy-button">Buy</button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCartClicked() {
      this.$emit("addToCart", this.item);
    },
    buyClicked() {
      this.$router.push({ name: "BuyPage" });
    },
  },
};
</script>

<style scoped>
.item-card {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cart-button {
  margin-right: 10px;
}

button:hover {
  background-color: #0056b3;
}
</style>
