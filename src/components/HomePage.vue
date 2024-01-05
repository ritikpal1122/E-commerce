<template>
  <div class="full-page-container">
    <!-- Navbar Section -->
    <div class="navbar">
      <NavBar :cartCount="cartCount" />
    </div>

    <!-- Slideshow Images Section -->
    <div class="slideshow-container">
      <img :src="currentImage.src" alt="Slideshow Image" class="slideshow-image" />
    </div>

    <!-- Main Content Section -->
    <div class="main-content">
      <!-- Items Section -->
      <div class="item-container">
        <div v-for="item in displayedItems" :key="item.id" class="item-card-wrapper">
          <ItemCart
            :item="item"
            @addToCart="addToCart"
            @buy="navigateToBuyPage"
          />
        </div>
      </div>

    
    </div>
    <FooterPage/>
  </div>
  
 
</template>

<script>
import items from "@/assets/items.json";
import NavBar from "./NavBar.vue";
import ItemCart from "./ItemCart.vue";
import FooterPage from "./FooterPage.vue";

export default {
  components: {
    NavBar,
    ItemCart,
    FooterPage
},
  data() {
    return {
      items: items,
      cartCount: 0,
      sidebarItems: items.slice(0, 10),
      topImages: [
        { id: 1, src: require("@/assets/images/image1.jpg") },
        { id: 2, src: require("@/assets/images/image2.jpg") },
        { id: 3, src: require("@/assets/images/image3.jpg") },
      ],
      currentImageIndex: 0,
      searchQuery: '',
      categories: [
        { id: 1, name: 'Electronics' },
        { id: 2, name: 'Clothing' },
        { id: 3, name: 'Books' },
      ],
    };
  },
  computed: {
    currentImage() {
      return this.topImages[this.currentImageIndex];
    },
    displayedItems() {
      return this.items.filter(item => item.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
  },
  methods: {
    addToCart() {
      this.cartCount += 1;
    },
    navigateToBuyPage(item) {
      console.log("Navigating to Buy Page for item:", item);
    },
    navigateToItemPage(item) {
      console.log("Navigating to Item Page for item:", item);
    },
    startSlideshow() {
      this.interval = setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.topImages.length;
      }, 3000);
    },
    searchProducts() {
      console.log('Searched for:', this.searchQuery);
    },
    filterByCategory(category) {
      console.log('Filtered by category:', category.name);
    },
  },
  mounted() {
    this.startSlideshow();
  },
  destroyed() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
.full-page-container {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  padding: 20px;
}


.search-bar {
  margin: 20px 0;
}

.search-bar input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}


.search-bar button {
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

.product-categories {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}

.product-categories h3 {
  margin-bottom: 10px;
}

.product-categories ul {
  list-style-type: none;
}

.product-categories li {
  padding: 10px 0;
  cursor: pointer;
  transition: background-color 0.3s;
}

.product-categories li:hover {
  background-color: #f9f9f9;
}

.slideshow-container {
  max-width:100%;
  margin-bottom: 20px;
}

.slideshow-image {
  width: 100%;
  height: 500px;
  
  
  border-radius: 5px;
}

.main-content {
  display: flex;
}

.item-container {
  flex: 3;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 10px;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; 
}
.item-card-wrapper {
  flex: 0 0 calc(33.333% - 20px);
  margin-bottom: 20px;
  border: 1px solid #e0e0e0; 
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.item-card-wrapper img {
  width: 100%; 
  height: auto;
  border-radius: 5px;
}

.main-content {
  margin-top: 80px;
  display: flex; 

}
@media (min-width: 1200px) { 
  .item-card-wrapper {
    flex: 0 0 calc(20% - 20px);
  }
}

@media (max-width: 1200px) and (min-width: 769px) {
  .item-card-wrapper {
    flex: 0 0 calc(25% - 20px); 
  }
}

@media (max-width: 768px) and (min-width: 481px) {
  .item-card-wrapper {
    flex: 0 0 calc(33.333% - 20px);
  }
}

@media (max-width: 480px) {
  .item-card-wrapper {
    flex: 0 0 calc(50% - 20px); 
  }
}

</style> 