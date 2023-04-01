<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-6">
        <form class="mt-5" @submit.prevent="handleSubmit">
          <div class="form-group mb-4">
            <label for="exampleInputEmail1">Display Name</label>
            <input
              type="text"
              class="form-control mt-2"
              placeholder="Enter Name"
              v-model="displayName"
            />
          </div>
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

          <button type="submit" class="btn btn-primary">Register</button>
        </form>
        <div v-if="error">{{ error }}</div>
      </div>
      <div class="col-6">
        <img src="src/assets/img/Signup-cuate.png" alt="" />
      </div>
    </div>
  </div>
</template>
  
  <script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useSignup from "../composables/useSignup";
import useCollection from "../composables/useCollection";
export default {
  setup() {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");
    const { error, signup, isPending } = useSignup();
    const { addDoc } = useCollection("users");
    const router = useRouter();
    const handleSubmit = async () => {
      const res = await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        console.log(res);
      }

      router.push({ name: "Home" });
    };
    return { displayName, email, password, handleSubmit, error };
  },
};
</script>
  
  <style scoped>
img {
  max-width: 100%;
}
</style>