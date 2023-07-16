<template>
  <div class="w-[800px] mx-auto">
    <pre>
      {{ meal }}
    </pre>
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category: </strong>
        {{ meal.strCategory }}
      </div>
      <div>
        <strong class="font-bold">Area: </strong>
        {{ meal.strArea }}
      </div>
      <div>
        <strong class="font-bold">Tags: </strong>
        {{ meal.strTags }}
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul>
            <template v-for="(i, index) of new Array(20)" :key="index">
              <li v-if="meal[`strIngredient${index + 1}`]">
                {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-2">Measures</h2>
          <ul>
            <template v-for="(i, index) of new Array(20)" :key="index">
              <li v-if="meal[`strMeasure${index + 1}`]">
                {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axios.get(`/api/lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>
