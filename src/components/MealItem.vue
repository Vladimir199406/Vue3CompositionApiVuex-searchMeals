<template>
  <div class="bg-white shadow rounded-xl">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="px-3">
      <h3 class="py-3 font-bold">{{ meal.strMeal }}</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <div class="py-3 flex items-center justify-between">
        <CustomButton :href="meal.strYoutube" :background="'red'"
          >YouTube</CustomButton
        >
        <CustomButton :href="meal.strSource" :background="'indigo'"
          >Source</CustomButton
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import CustomButton from "../components/CustomButton.vue";

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
