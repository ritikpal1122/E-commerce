<template>
    <div class="credit-card-container">
      <h2>Credit Card Information</h2>
      <input type="text" placeholder="Card Number" v-model="cardInfo.cardNumber">
      <input type="text" placeholder="Expiration Date (MM/YY)" v-model="cardInfo.expiryDate">
      <input type="text" placeholder="CVV" v-model="cardInfo.cvv">
      <input type="text" placeholder="Address" v-model="cardInfo.address">
      <button @click="confirmPayment">Confirm Payment</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cardInfo: {
          cardNumber: '',
          expiryDate: '',
          cvv: '',
          address: ''
        }
      };
    },
    methods: {
      confirmPayment() {
        alert('Payment Confirmed via Credit Card!');
        this.$router.push('/');
      }
    }
  }
  </script>
  
  <style scoped>
  .credit-card-container {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  </style>
  