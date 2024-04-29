<template>
  <component
    v-for="item in home"
    :key="item.id"
    :is="getComponent(item.__component)"
    :data="item"
  ></component>
</template>

<script setup>
import Title from 'components/Home/SectionTitle.vue';
import Choose from 'components/Home/SectionChoose.vue';
import Good from 'components/Home/SectionGood.vue';
import News from 'components/Home/SectionNews.vue';

import { ref, onMounted, markRaw } from 'vue';
import axios from 'axios';

const url = 'http://localhost:1337/api/homes?populate=deep';
const home = ref([]);

const components = {
  'home.section-title': Title,
  'home.best-for-you': Choose,
  'home.card': Good,
  'home.news': News,
};

async function fetchHomePage() {
  const { data } = await axios.get(url);
  if (!data.data.length) return [];
  return data.data[0].attributes.home;
}

function getComponent(componentName) {
  return markRaw(components[componentName]);
}

// eslint-disable-next-line no-return-assign
onMounted(async () => (home.value = await fetchHomePage()));
</script>

<style>

</style>
