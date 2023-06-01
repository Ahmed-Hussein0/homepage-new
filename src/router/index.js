import Vue from "vue";
import VueRouter from "vue-router";
import Hoomee from "@/views/Hoomee.vue";
import New from "@/views/New.vue";
import Popular from "@/views/Popular.vue";
import Category from "@/views/Category.vue";
import Trending from "@/views/Trending.vue";
Vue.use(VueRouter);

const routes = [
  
  {
    path: "/",
    name: "home",
    component: Hoomee,
  },
  {
    path: "/New",
    name: "New",
    component: New,
  },
  {
    path: "/Popular",
    name: "Popular",
    component: Popular,
  },
  {
    path: "/Category",
    name: "Category",
    component: Category,
  },
  {
    path: "/Trending",
    name: "Trending",
    component: Trending,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;