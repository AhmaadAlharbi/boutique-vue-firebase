import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Shop from "../views/Shop.vue";
import Cart from "../views/Cart.vue";
import AddCategory from "../views/dashboard/AddCategory.vue";
import AddProduct from "../views/dashboard/AddProduct.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Signup",
      component: Signup,
    },
    {
      path: "/shop",
      name: "Shop",
      component: Shop,
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
    },
    {
      path: "/add-category",
      name: "AddCategory",
      component: AddCategory,
    },
    {
      path: "/add-product",
      name: "AddProduct",
      component: AddProduct,
    },
  ],
});

export default router;
