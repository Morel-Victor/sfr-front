<template>
  <div class="badge-container">
    <div class="badge">
      <a class="text content-center" :href="badge.url">{{ badge.name }}</a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  badge: Object,
});
</script>

<style scoped>
.badge {
  display: inline-block;
  height: 24px;
  border-radius: 12px;
  border: 1px solid #a0a0a0;
  margin: 32px 12px 32px 12px;
}

.badge-container {
  height: 64px;
}

.text {
  width: 100%;
  height: 24px;
  padding: 2px 12px 0 12px;
  margin: 0;
  color: #555;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.text:hover {
  color: #000000;
  cursor: pointer;
}

a {
  text-decoration: none;
}
</style>
