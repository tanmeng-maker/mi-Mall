import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
    path: '/',
    name: 'Home',
    redirect: '/index',
    component: () => import('./views/Home.vue'),
    children: [{
        path: '/index',
        name: 'Index',
        component: () => import('./views/Index.vue')
      },
      {
        path: '/product/:id',
        name: 'Product',
        component: () => import('./views/Product.vue')
      },
      {
        path: '/detail/:id',
        name: 'Detail',
        component: () => import('./views/Detail.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./views/Login.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('./views/Cart.vue'),
  },
  {
    path: '/order',
    name: 'Order',
    // redirect: '/list',
    component: () => import('./views/Order.vue'),
    children: [{
        path: '/list',
        name: 'OrderList',
        component: () => import('./views/OrderList.vue'),
      },
      {
        path: '/confirm',
        name: 'OrderConfirm',
        component: () => import('./views/OrderConfirm.vue'),
      },
      {
        path: '/pay',
        name: 'OrderPay',
        component: () => import('./views/OrderPay.vue'),
      }, {
        path: '/alipay',
        name: 'Alipay',
        component: () => import('./views/Alipay.vue'),
      }
    ]
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router