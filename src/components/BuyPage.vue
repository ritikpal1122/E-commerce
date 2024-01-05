<template>
  <div>
    <NavBar />
    <div class="container">
      <h1>Select a Payment Method</h1>
      <div class="payment-options">
        <div @click="selectPayment('Credit Card')" class="payment-option">
          Credit Card
        </div>
        <div @click="selectPayment('Debit Card')" class="payment-option">
          Debit Card
        </div>
        <div @click="selectPayment('Amazon Pay')" class="payment-option">
          Amazon Pay
        </div>
        <div @click="selectPayment('Phone Pay')" class="payment-option">
          Phone Pay
        </div>
        <div @click="selectPayment('Cash On Delivery')" class="payment-option">
          Cash On Delivery
        </div>
      </div>

      <div class="selected-method" v-if="selectedPayment">
        <p>You've selected: {{ selectedPayment }}</p>
        <button class="buy-button" @click="showPaymentInfo = true">
          Proceed
        </button>
      </div>

      <div class="payment-info" v-if="showPaymentInfo">
        <h2>Enter {{ selectedPayment }} Information</h2>
        <div
          v-if="['Credit Card', 'Debit Card'].includes(selectedPayment)"
          class="card-details"
        >
          <label class="card-type-label">Card Type:</label>
          <div class="card-type-options">
            <input
              type="radio"
              id="visa"
              value="Visa"
              v-model="cardInfo.cardType"
            />
            <label for="visa">Visa</label>

            <input
              type="radio"
              id="mastercard"
              value="Mastercard"
              v-model="cardInfo.cardType"
            />
            <label for="mastercard">Mastercard</label>
          </div>

          <input
            type="text"
            placeholder="Card Number"
            v-model="cardInfo.cardNumber"
            @input="validateCardNumber"
          />
          <input
            type="text"
            placeholder="Expiration Date (MM/YY)"
            v-model="cardInfo.expiryDate"
            @input="validateExpiryDate"
          />
          <input
            type="text"
            placeholder="CVV"
            v-model="cardInfo.cvv"
            @input="validateCVV"
          />

          <p v-if="cardNumberError" class="error-message">
            {{ cardNumberError }}
          </p>
          <p v-if="expiryDateError" class="error-message">
            {{ expiryDateError }}
          </p>
          <p v-if="cvvError" class="error-message">{{ cvvError }}</p>
        </div>

        <button class="confirm-button" @click="placeOrder">
          Confirm Purchase
        </button>
      </div>

      <div v-if="isOrderPlaced" class="popup">
        <p>🎉 Item Placed Successfully! 🎉</p>
      </div>
    </div>
    <FooterPage />
  </div>
</template>

<script>
import FooterPage from "./FooterPage.vue";
import NavBar from "./NavBar.vue";

export default {
  components: {
    NavBar,
    FooterPage,
  },
  data() {
    return {
      selectedPayment: null,
      cardInfo: {
        cardType: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
      },
      showPaymentInfo: false,
      isOrderPlaced: false,
      cardNumberError: "",
      expiryDateError: "",
      cvvError: "",
    };
  },
  methods: {
    selectPayment(paymentMethod) {
      this.selectedPayment = paymentMethod;
      this.showPaymentInfo = false;
    },
    placeOrder() {
      this.isOrderPlaced = true;
      setTimeout(() => {
        this.isOrderPlaced = false;
        this.selectedPayment = null;
        this.cardInfo = {
          cardType: "",
          cardNumber: "",
          expiryDate: "",
          cvv: "",
        };
        this.showPaymentInfo = false;
      }, 3000);
    },
    validateCardNumber() {
      this.cardNumberError = "";
    },
    validateExpiryDate() {
      this.expiryDateError = "";
    },
    validateCVV() {
      this.cvvError = "";
    },
  },
};
</script>

<style scoped>
.container {
  font-family: "Amazon Ember", Arial, sans-serif;
  max-width: 900px;
  margin: auto;
  padding: 40px;
  border-radius: 8px;
  background-color: #f4f4f4;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;
  color: #333;
}

.payment-options {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.payment-option {
  padding: 18px;
  background-color: #f9f9f9;
  color: #333;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  border: 1px solid #ddd;
}

.payment-option:hover {
  background-color: #e9e9e9;
}

.selected-method {
  margin-bottom: 40px;
  text-align: center;
}

.card-details {
  border: 1px solid #ddd;
  padding: 25px;
  border-radius: 8px;
  margin-top: 25px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.card-type-label {
  font-size: 1rem;
  margin-bottom: 15px;
  display: block;
  color: #555;
}

.card-type-options {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.card-type-options label {
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.card-type-options input[type="radio"] {
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #ddd;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
}

.card-type-options input[type="radio"]:checked {
  border-color: #007bff;
}

/* Styling for Input Fields */
input[type="text"] {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input[type="text"]:focus {
  border-color: #007bff;
  outline: none;
}

.error-message {
  color: red;
  margin-top: 8px;
  font-size: 0.9rem;
}

.buy-button,
.confirm-button {
  padding: 14px 30px;
  background-color: #f90;
  color: #fff;
  border: none;
  border-radius: 8px;
  margin-top: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s, transform 0.2s;
}

.buy-button:hover,
.confirm-button:hover {
  background-color: #e78000;
  transform: scale(1.05);
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 35px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  font-size: 1.3rem;
}
</style>
