<template>
  <div class="flex flex-col p-8">

  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "@/store/index";
import axios from "axios";

const ingredients = ref([]);

onMounted(async () => {
  const response = await axios.get("/api/list.php?i=list");
  console.log(response.data);
  ingredients.value = response.data;
});
</script>
