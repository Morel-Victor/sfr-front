<template>
  <div class="main-title">{{ data.name }}</div>
</template>

<script setup>
defineProps({
  data: Object,
});
</script>

<style scoped>
.main-title {
  max-width: 1280px;
  margin: 40px auto 40px;
  width: calc(100% - 32px);
  display: grid;
  gap: 24px;
  text-align: center;
  font-size: 40px;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
}
</style>
