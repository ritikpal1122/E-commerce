
<template>
    <div class="debit-card-container">
      <h2>Debit Card Payment</h2>
      <input type="text" placeholder="Card Number" v-model="cardNumber">
      <input type="text" placeholder="Expiration Date (MM/YY)" v-model="expiryDate">
      <input type="text" placeholder="CVV" v-model="cvv">
      <input type="text" placeholder="Address" v-model="address">
      <button @click="confirmPayment">Confirm Payment</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        address: ''
      };
    },
    methods: {
      confirmPayment() {
        alert('Debit Card Payment Successful!');
      }
    }
  }
  </script>
  
  <style scoped>
  .debit-card-container {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    max-width: 400px;
    margin: auto;
  }
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  