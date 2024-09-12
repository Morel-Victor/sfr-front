<template>
  <component
    v-for="(item, index) in data.attributes.composants"
    :key="`component-${item.id}-${index}`"
    :is="getComponent(item.__component)"
    :data="item"
  ></component>
</template>

<script setup>
import { markRaw } from 'vue';

import Carousel from 'components/Carousel/CarouselContainer.vue';
import MainTitle from 'components/WhyUs/SectionMainTitle.vue';
import Title from 'components/WhyUs/SectionTitle.vue';
import Shop from 'components/WhyUs/SectionShop.vue';
import HighSpeed from 'components/WhyUs/SectionHighSpeed.vue';
import HomeTitle from 'components/Home/SectionTitle.vue';
import Choose from 'components/Home/SectionChoose.vue';
import Good from 'components/Home/SectionGood.vue';
import News from 'components/Home/SectionNews.vue';
import Html from 'components/HtmlComponent.vue';

defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const components = {
  'carousel.carousel': Carousel,
  'home.section-title': HomeTitle,
  'home.best-for-you': Choose,
  'home.card': Good,
  'home.news': News,
  'home.html': Html,
  'why-us.section-title': Title,
  'why-us.main-title': MainTitle,
  'why-us.shop': Shop,
  'why-us.high-speed': HighSpeed,
};

function getComponent(componentName) {
  const component = components[componentName];
  if (!component) {
    return null;
  }
  return markRaw(component);
}
</script>

<style>
</style>
