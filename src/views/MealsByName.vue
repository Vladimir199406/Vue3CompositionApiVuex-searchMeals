<template>
  <div class="p-6">
    <input
      v-model="keyword"
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
    <pre>
      {{ meals }}
    </pre>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import store from '../store'

const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
  store.dispatch('searchMeals', keyword.value)
}
</script>
