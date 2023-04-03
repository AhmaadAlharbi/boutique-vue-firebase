<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-6">
        <div v-if="error">{{ error }}</div>
        <form class="mt-5" @submit.prevent="handleSubmit">
          <div class="form-group mb-4">
            <label for="exampleInputEmail1">Product name</label>
            <input
              type="text"
              class="form-control mt-2"
              aria-describedby="emailHelp"
              placeholder="enter category name"
              v-model="title"
            />
          </div>
          <div class="form-group mb-4">
            <label for="exampleInputPassword1">Description</label>
            <textarea
              class="form-control mt-3"
              placeholder="enter Description"
              v-model="description"
            ></textarea>
          </div>
          <div class="form-group mb-4">
            <label for="exampleInputPassword1">Category</label>
            <select class="form-control" v-model="category">
              <option v-for="doc in documents" :key="doc.id">
                {{ doc.name }}
              </option>
            </select>
          </div>
          <div class="form-group mb-4">
            <label for="exampleInputPassword1">Price</label>
            <input type="text" class="form-control" v-model="price" />
          </div>
          <div class="form-group mb-4">
            <label for="exampleInputPassword1">Gender</label>
            <select class="form-control" v-model="gender">
              <option value="unisex">Unisex</option>
              <option value="women">Women</option>
              <option value="men">Men</option>
            </select>
          </div>
          <div class="form-group mb-4">
            <input type="file" class="form-control" @change="handleChange" />
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
import useCollection from "../../composables/useCollection";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "vue-router";
import { timestamp } from "@/firebase/config";
import getCollection from "../../composables/getCollection";
import useStorage from "../../composables/useStorage";

export default {
  setup() {
    const title = ref("");
    const description = ref("");
    const price = ref(0);
    const gender = ref("");
    const category = ref("");
    const { error, addDoc, isPending } = useCollection("products");
    const { documents } = getCollection("categories");
    const { filePath, url, uploadImage } = useStorage();
    const file = ref(null);

    const router = useRouter();
    // allowed file types
    const types = ["image/png", "image/jpeg"];
    const handleChange = (e) => {
      let selected = e.target.files[0];
      console.log(selected);
      if (selected && types.includes(selected.type)) {
        file.value = selected;
        fileError.value = null;
      } else {
        file.value = null;
        fileError.value = "Please select an image file (png or jpg)";
      }
    };
    const handleSubmit = async () => {
      await uploadImage(file.value);
      const res = await addDoc({
        id: uuidv4(),
        name: title.value,
        description: description.value,
        price: price.value,
        coverUrl: url.value,
        filePath: filePath.value, // so we can delete it later
        createdAt: timestamp(),
      });
      if (!error.value) {
        router.push({ name: "Home" });
      }
    };

    return {
      handleChange,
      title,
      documents,
      description,
      error,
      handleSubmit,
      price,
      gender,
      category,
    };
  },
};
</script>

<style>
</style>