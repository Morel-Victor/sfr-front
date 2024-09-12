<template>
  <p>{{ data.text }}</p>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<style>
</style>
