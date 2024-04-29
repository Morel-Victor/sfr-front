<template>
  <div class="carousel-container" aria-live="polite">
    <transition name="fade" mode="out-in">
      <div :key="carouselKey" class="reloaded-content">
        <CarouselSlide :slideData="carouselData[currentSlide]"/>
      </div>
    </transition>
    <div class="flex content">
      <div class="carousel-thumbnails">
        <div
          class="thumbnail"
          v-for="(slide, index) in carouselData"
          :key="index"
          :class="{ active: index === currentSlide }"
          @click="changeSlide(index)"
        >
          <div class="row">
            <q-img
              :src="'http://localhost:1337' + slide.attributes.icon.data.attributes.url"
              :alt="'Slide ' + (index + 1) + ' thumbnail'"
              class="thumbnail-img"
            ></q-img>
            <div class="name">
              {{ slide.attributes.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  computed,
  onMounted,
  onUnmounted,
  ref,
} from 'vue';
import { api } from 'boot/axios';
import CarouselSlide from 'components/Carousel/CarouselSlide.vue';

const carouselData = ref([]);
const currentSlide = ref(0);
let timer = null;
async function fetchCarousel() {
  const url = 'carousel-containers?populate=deep';
  const { data } = await api.get(url);
  carouselData.value = data.data[0].attributes.carousel_categories.data;
}

const changeSlide = (index) => {
  currentSlide.value = index;
};

const startAutoSlideChange = () => {
  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % carouselData.value.length;
  }, 5000);
};

const carouselKey = computed(() => {
  if (carouselData.value.length === 0) {
    return currentSlide.value;
  }
  return carouselData.value[currentSlide.value].id;
});

onMounted(async () => {
  await fetchCarousel();
  startAutoSlideChange();
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style scoped>
.carousel-container {
  position: relative;
  overflow: hidden;
  height: 460px;
}

.carousel-slide img {
  width: 100%;
  height: auto;
  z-index: 400;
}

.carousel-thumbnails {
  max-width: 1280px;
  width: calc(100% - 64px);
  margin: 0 auto 24px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  z-index: 500;
  top: 390px;
  position: absolute;
}

.content {
  place-content: center;
}

.thumbnail {
  width: 288px;
  height: 52px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.4s ease-out;
  display: flex;
  vertical-align: middle;
}

.thumbnail:hover {
  background-color: rgba(0, 0, 0, 0.17);
}

.thumbnail-img {
  height: 52px;
  width: 52px;
  margin-right: 14px;
}

.thumbnail.active {
  transition: background-color 0.4s ease-out;
  background-color: rgba(0, 0, 0, 0.17);
  .name {
    font-family: "Poppins", sans-serif;
    font-weight: bold;
  }
}

.name {
  width: 210px;
  height: 18px;
  display: flex;
  vertical-align: middle;
  padding: 17px 0;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: white;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.7;
}
</style>
