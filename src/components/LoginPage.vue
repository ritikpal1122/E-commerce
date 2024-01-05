<template>
  <div class="login-container">
    <h2 class="login-title">Welcome Back!</h2>
    <div class="input-data">
      <input type="text" v-model="username" placeholder="Enter your username" class="login-input" />
      <input type="password" v-model="password" placeholder="Enter your password" class="login-input" />
      <button @click="login" class="login-btn">Login</button>
    </div>
    <p v-if="showMessage" class="error-message">Invalid credentials. Please try again.</p>

    <div class="buttons">
      <button @click="navigateToSignup" class="btn">Sign Up</button>
      <button @click="navigateToForgotPassword" class="btn">Forgot Password?</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      showMessage: false
    };
  },
  methods: {
    login() {
      if (this.username === "username" && this.password === "password") {
        this.$router.push("/home");
      } else {
        this.showMessage = true;
        setTimeout(() => {
          this.showMessage = false;
        }, 3000); 
      }
    },
    navigateToSignup() {
      this.$router.push("/signup"); 
    },
    navigateToForgotPassword() {
      this.$router.push("/forgot-password"); 
    }
  }
};
</script>


<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #ffffff;
}

.login-title {
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
  font-weight: 600;
}

.input-data {
  margin-bottom: 30px;
}

.login-input {
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.login-input:focus {
  border-color: #007bff;
  outline: none;
}

.login-btn {
  padding: 15px 30px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.login-btn:hover {
  background-color: #0056b3;
}

.error-message {
  color: #d32f2f;
  margin-top: 20px;
  font-size: 14px;
}

.buttons {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}

.btn {
  padding: 10px 20px;
  background-color: transparent;
  border: none;
  color: #007bff;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.3s;
}

.additional-btn:hover {
  color: #0056b3;
}
</style>
