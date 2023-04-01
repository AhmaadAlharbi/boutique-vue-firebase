<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-6">
        <div v-if="error">{{ error }}</div>
        <form class="mt-5" @submit.prevent="handleSubmit">
          <div class="form-group mb-4">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control mt-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="email"
            />
          </div>
          <div class="form-group mb-4">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control mt-2"
              id="exampleInputPassword1"
              placeholder="Password"
              v-model="password"
            />
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="col-6">
        <img src="src/assets/img/login.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";
import { useRouter } from "vue-router";
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();
    const { error, login, isPending } = useLogin();
    const handleSubmit = async () => {
      const res = await login(email.value, password.value);
      if (!error.value) {
        router.push({ name: "Home" });
      }
    };
    return { email, password, error, login, handleSubmit };
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
}
</style>