<template>
  <div class="p-8 pb-0">
    <input
      v-model="keyword"
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <div
        v-for="meal of meals"
        :key="meal.idMeal"
        class="bg-white shadow rounded-xl"
      >
        <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
          <img
            :src="meal.strMealThumb"
            alt="strMeal"
            class="rounded-t-xl w-full h-48 object-cover"
          />
        </router-link>
        <div class="px-3">
          <h3 class="py-3 font-bold">{{ meal.strMeal }}</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <div class="py-3 flex items-center justify-between">
            <a
              :href="meal.strYotube"
              target="_blank"
              class="px-3 py-2 rounded border-2 border-red-600 bg-red-500 text-white hover:bg-red-600 hover:text-white hover:cursor-pointer transition-colors"
              >Yotube</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";

const route = useRoute()

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})
</script>
