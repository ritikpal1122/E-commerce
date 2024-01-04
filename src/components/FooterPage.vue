<!-- Footer.vue -->
<template>
  <footer class="footer-section">
    <div class="footer-content">
      <div class="footer-column">
        <h4>Company</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>Customer Care</h4>
        <ul>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Return & Refunds</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>Policies & More</h4>
        <ul>
          <li><a href="#">Return Policy</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>

      <div class="footer-column social-links">
        <h4>Stay Connected</h4>
        <div class="social-icons">
          <a href="#" class="social-icon">Facebook</a>
          <a href="#" class="social-icon">Twitter</a>
          <a href="#" class="social-icon">Instagram</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 @RitikPal. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterPage",
};
</script>

<style scoped>
.footer-section {
  background-color: rgb(48, 47, 47);
  color: #fff;
  padding: 30px 0;
  font-size: 14px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-column {
  flex: 1;
  padding: 0 15px;
}

.footer-column h4 {
  color: #fff;
  margin-bottom: 15px;
  font-size: 18px;
}

.footer-column ul {
  list-style-type: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 10px;
}

.footer-column ul li a {
  color: #ddd;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-column ul li a:hover {
  color: #fff;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-icon {
  color: #ddd;
  text-decoration: none;
  transition: color 0.3s;
}

.social-icon:hover {
  color: #fff;
}
.footer-bottom {
  margin-top: 30px;
  border-top: 1px solid #444;
  padding-top: 15px;
  font-size: 12px;
}
</style>
