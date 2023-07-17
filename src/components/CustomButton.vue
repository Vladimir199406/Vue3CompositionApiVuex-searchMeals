<template>
  <a
    :href="href"
    target="_blank"
    :class="`px-3 py-2 rounded border-2 border-${props.background}-500 bg-${props.background}-500 text-white hover:bg-${props.background}-600 hover:text-white hover:cursor-pointer transition-colors`"
  >
    <slot></slot>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
  background: String,
});
</script>
