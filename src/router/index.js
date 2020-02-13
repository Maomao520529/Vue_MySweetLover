import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/backEnd/Login.vue')
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/backEnd/Dashboard.vue'),
    children: [
      {
        path: 'productsList',
        name: 'ProductsList',
        component: () => import('../views/backEnd/ProductsList.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'orderList',
        name: 'OrderList',
        component: () => import('../views/backEnd/OrderList.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/backEnd/Coupons.vue'),
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/frontEnd/Index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/frontEnd/About.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/frontEnd/Products.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/frontEnd/News.vue')
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import('../views/frontEnd/Product.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/frontEnd/Checkout.vue')
  },
  {
    path: '/checkout/:orderId',
    name: 'CustomerCheckout',
    component: () => import('../views/frontEnd/CustomerCheckout.vue')
  },
  {
    path: '/payment_success/:orderId',
    name: 'PaymentSuccess',
    component: () => import('../views/frontEnd/PaymentSuccess.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
