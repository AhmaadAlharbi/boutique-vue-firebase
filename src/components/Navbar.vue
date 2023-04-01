<template>
  <header class="header bg-white">
    <div class="container px-lg-3">
      <nav class="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
        <a class="navbar-brand" href="index.html"
          ><span class="fw-bold text-uppercase text-dark">Boutique</span></a
        >
        <button
          class="navbar-toggler navbar-toggler-end"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <router-link :to="{ name: 'Home' }">
              <li class="nav-item">
                <!-- Link--><a class="nav-link" href="index.html">Home</a>
              </li>
            </router-link>
            <router-link :to="{ name: 'Shop' }">
              <li class="nav-item"><!-- Link--><a class="nav-link">Shop</a></li>
            </router-link>
          </ul>
          <ul class="navbar-nav ms-auto">
            <router-link :to="{ name: 'Cart' }">
              <li class="nav-item">
                <a class="nav-link" href="cart.html">
                  <i class="fas fa-dolly-flatbed me-1 text-gray"></i>Cart<small
                    class="text-gray fw-normal"
                    >(2)</small
                  ></a
                >
              </li>
            </router-link>

            <li class="nav-item" v-if="user">
              <i class="fas fa-user me-1 text-gray fw-normal"
                >Hello,{{ user.displayName }}</i
              >
              <button @click="handleClick" class="btn btn-primary">
                Logout
              </button>
            </li>
            <router-link :to="{ name: 'Login' }" v-if="!user">
              <li class="nav-item">
                <a class="nav-link" href="#!">
                  <i class="fas fa-user me-1 text-gray fw-normal"></i>Login</a
                >
              </li>
            </router-link>
            <router-link :to="{ name: 'Signup' }" v-if="!user">
              <li class="nav-item">
                <a class="nav-link" href="#!">
                  <i class="fas fa-user me-1 text-gray fw-normal"></i
                  >Register</a
                >
              </li>
            </router-link>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { useRouter } from "vue-router";
import getUser from "../composables/getUser";
import useLogout from "../composables/useLogout";
export default {
  setup() {
    const { user } = getUser();
    const { error, logout, isPending } = useLogout();
    const router = useRouter();
    const handleClick = async () => {
      await logout();
      router.push({ name: "Home" });
    };
    return { handleClick, user };
  },
};
</script>

<style>
</style>