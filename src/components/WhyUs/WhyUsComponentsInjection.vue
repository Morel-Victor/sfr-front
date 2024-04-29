<template>
  <component
    v-for="item in home"
    :key="item.id"
    :is="getComponent(item.__component)"
    :data="item"
  ></component>
</template>

<script setup>
import MainTitle from 'components/WhyUs/SectionMainTitle.vue';
import Title from 'components/WhyUs/SectionTitle.vue';
import Shop from 'components/WhyUs/SectionShop.vue';
import HighSpeed from 'components/WhyUs/SectionHighSpeed.vue';

import { ref, onMounted, markRaw } from 'vue';
import axios from 'axios';

const url = 'http://localhost:1337/api/why-uses?populate=deep';
const home = ref([]);

const components = {
  'why-us.section-title': Title,
  'why-us.main-title': MainTitle,
  'why-us.shop': Shop,
  'why-us.high-speed': HighSpeed,
};

async function fetchHomePage() {
  const { data } = await axios.get(url);
  if (!data.data.length) return [];
  return data.data[0].attributes.WhyUs;
}

function getComponent(componentName) {
  return markRaw(components[componentName]);
}

// eslint-disable-next-line no-return-assign
onMounted(async () => (home.value = await fetchHomePage()));
</script>

<style>

</style>
