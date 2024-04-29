<template>
  <div>
    <div class="col-12 flex justify-center">
      <NavBarList v-for="list in navlists" :key="list.id" :list="list"/>
    </div>
    <div class="col-12 flex justify-center">
      <NavBarBadge v-for="badge in badges" :key="badge.id" :badge="badge"/>
    </div>
  </div>
</template>

<script setup>
import NavBarList from 'components/NavBar/NavBarList.vue';
import NavBarBadge from 'components/NavBar/NavBarBadge.vue';

defineProps({
  navlists: Object,
  badges: Object,
});
</script>

<style scoped>

</style>
