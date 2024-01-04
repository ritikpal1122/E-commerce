<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <router-link to="/home" class="navbar-logo">MyApp</router-link>

      <!-- Search Bar -->
      <div class="search-container">
        <input type="text" v-model="searchQuery" @keyup.enter="handleSearch" class="search-input" placeholder="Search products..." />
        <button @click="handleSearch" class="search-btn">Search</button>
      </div>

      <!-- Categories Dropdown -->
      <div class="categories-dropdown" @mouseover="showCategories = true" @mouseleave="showCategories = false">
        <button class="categories-btn">Categories ▼</button>
        <div v-if="showCategories" class="categories-content">
          <a href="#">Category 1</a>
          <a href="#">Category 2</a>
        </div>
      </div>

      <!-- User Profile and Cart -->
      <div class="user-cart-container" @mouseover="showUserProfile = true" @mouseleave="showUserProfile = false">
        <button class="profile-btn">User ▼</button>
        <div v-if="showUserProfile" class="profile-content">
          <a href="#">Profile</a>
          <a href="#">Orders</a>
          <a href="#">Logout</a>
        </div>
        <router-link to="/cart" class="cart-icon">Cart ({{ cartCount }})</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    cartCount: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      searchQuery: '',
      showCategories: false,
      showUserProfile: false
    };
  },
  methods: {
    handleSearch() {
      console.log('Search Query:', this.searchQuery);
     
    }
  }
};
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Navbar styles */
.navbar {
  background-color: #333;
  padding: 15px 40px;
  width: 100%;
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  
}

.navbar-logo {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

.navbar-logo:hover {
  color: #ddd;
}

.search-container {
  flex: 1;
  margin: 0 20px;
  display: flex;
  align-items: center;
}

.search-input {
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  border-color: #555;
}

.search-btn {
  background-color: #444;
  color: #fff;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-btn:hover {
  background-color: #555;
}

.categories-dropdown,
.user-cart-container {
  position: relative;
}

.categories-btn,
.profile-btn,
.cart-icon {
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 20px;
  transition: background-color 0.3s ease;
}

.categories-btn:hover,
.profile-btn:hover,
.cart-icon:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.categories-content,
.profile-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 150px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 4px;
}

.categories-content a,
.profile-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s ease;
}

.categories-content a:hover,
.profile-content a:hover {
  background-color: #f1f1f1;
}

.categories-dropdown:hover .categories-content {
  display: block;
}

.user-cart-container:hover .profile-content {
  display: block;
}

</style>
