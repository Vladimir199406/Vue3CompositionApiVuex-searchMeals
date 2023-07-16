<template>
  <div class="p-6">
    <input
      v-model="keyword"
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>
  <div>
    {{ meals }}
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import store from '../store'

const keyword = ref('')
const meals = computed(() => {
  store.state.searchMeals
})

function searchMeals() {
  store.dispatch('searchMeals', keyword.value)
}
</script>
