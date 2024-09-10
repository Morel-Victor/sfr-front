<template>
  <q-page>
<!--    <CarouselContainer />-->
    <ComponentsInjection :data="data"/>
  </q-page>
</template>

<script setup>
/* import CarouselContainer from 'components/Carousel/CarouselContainer.vue'; */
import ComponentsInjection from 'components/ComponentsInjection.vue';

defineProps({
  data: {
    type: Object,
  },
});
</script>

<style>
</style>
