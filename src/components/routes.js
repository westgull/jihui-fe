import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from 'components/home.vue';
import Rift from 'components/product/rift.vue';
import food from 'components/product/food.vue';
import fashion from 'components/product/fashion.vue';
import Demo from 'components/product/demo.vue';
import Login from 'components/login.vue';
import Register from 'components/register.vue';
import About from 'components/about.vue';
import Container from 'components/container.vue';
import Ucenter from 'components/user/ucenter.vue';
import Cart from 'components/cart.vue';
import Buy from 'components/buy.vue';
Vue.use(VueRouter);

const routes = [{
    path: '/',
    components: {
      container: Container,
    },
    children: [{
        path: '/',
        component: Home
      },
      {
        path: '/rift',
        component: Rift
      },
      {
        path: '/food',
        component: food
      },
      {
        path: '/fashion',
        component: fashion
      },
      {
        path: '/about',
        component: About
      },
      {
        path: '/ucenter',
        component: Ucenter
      },
      {
        path: '/product/:name',
        component: Demo
      },
      {
        path: '/cart',
        component: Cart
      },
      {
        path: '/buy',
        component: Buy
      },
    ]
  },
  {
    path: '/login',
    components: {
      container: Login
    }
  },
  {
    path: '/register',
    components: {
      container: Register
    }
  }
];

export default new VueRouter({
  // mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
});
