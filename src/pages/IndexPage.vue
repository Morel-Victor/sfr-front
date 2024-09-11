<template>
  <q-page>
    <ComponentsInjection :data="data"/>
  </q-page>
</template>

<script setup>
import ComponentsInjection from 'components/ComponentsInjection.vue';

defineProps({
  data: {
    type: Object,
  },
});
</script>

<style>
</style>
