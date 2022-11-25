import VueRouter from "vue-router";
import Vue from "vue";
import payment from "@/view/payment";
import user from "@/view/user";
import purOrder from "@/view/purOrder";
import prod from "@/view/prod";

Vue.use(VueRouter);

const router = new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/',
      component: payment
    },
    {
      path: '/user',
      component: user
    },
    {
      path: '/purOrder',
      component: purOrder
    },
    {
      path: '/prod',
      component: prod
    }
  ]
})

export default router
