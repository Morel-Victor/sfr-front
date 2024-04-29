<template>
  <h1 class="title">{{ data.name }}</h1>
</template>

<script setup>
defineProps({
  data: Object,
});
</script>

<style scoped>
.title {
  margin: 40px auto 24px;
  font-size: 32px;
  line-height: 36px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  max-width: 1280px;
  width: calc(100% - 64px);
  text-align: left;
  height: 36px;
}
</style>
