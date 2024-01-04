<template>
  <div class="google-pay-container">
    <h2>Google Pay Information</h2>
    <button @click="confirmPayment">Confirm Payment</button>
  </div>
</template>

<script>
export default {
  methods: {
    confirmPayment() {
      alert("Payment Confirmed via Google Pay!");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.google-pay-container {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}
</style>
