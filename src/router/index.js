import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props:true
  },
  {
    path: "/details/:slug",
    name: "destinationDetails",
    component: () => import(/* webpackChunkName: "panama" */ "../views/DestinationDetails.vue"),
    props:true
  }
];

const router = new VueRouter({
  mode:"history",
  routes
});

export default router;
