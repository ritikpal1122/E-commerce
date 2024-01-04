import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from '@/components/LoginPage.vue';
import BuyPage from './components/BuyPage.vue';
// import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
// import CreditCard from './components/CreditCard.vue';
// import DebitCard from './components/DebitCard.vue';
// import CashOnDelivery from './components/CashOnDelivery.vue';
// import GooglePay from './components/GooglePay.vue'


Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/buy',
    name: 'BuyPage',
    component: BuyPage
  }
  // {
  //   path: '/google-pay',
  //   name: 'GooglePay',
  //   component: GooglePay
  // },
  // {
  //   path: '/credit-card',
  //   name: 'CreditCard',
  //   component: CreditCard
  // },
  // {
  //   path: '/debit-card',
  //   name: 'DebitCard',
  //   component: DebitCard
  // },
  // {
  //   path: '/cash-on-delivery',
  //   name: 'CashOnDelivery',
  //   component: CashOnDelivery
  // }
];

const router = new Router({
  // history: createWebHistory(),
  routes
});
export default router;