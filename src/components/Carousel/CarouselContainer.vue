<template>
  <div class="carousel-container" aria-live="polite">
    <transition name="fade" mode="out-in">
      <div :key="carouselKey" class="reloaded-content">
        <CarouselSlide :slideData="data.Slide[currentSlide]"/>
      </div>
    </transition>
    <div class="flex content">
      <div class="carousel-thumbnails">
        <div
          class="thumbnail"
          v-for="(slide, index) in data.Slide || []"
          :key="index"
          :class="{ active: index === currentSlide }"
          @click="changeSlide(index)"
        >
          <div class="row">
            <q-img
              :src="'http://localhost:1337' + slide.icon.data[0].attributes.url"
              :alt="'Slide ' + (index + 1) + ' thumbnail'"
              class="thumbnail-img"
            ></q-img>
            <div class="name">
              {{ slide.name }}
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
import CarouselSlide from 'components/Carousel/CarouselSlide.vue';

const currentSlide = ref(0);
let timer = null;

const props = defineProps({
  data: {
    type: Object,
  },
});

const changeSlide = (index) => {
  currentSlide.value = index;
};

const startAutoSlideChange = () => {
  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % props.data.Slide.length;
  }, 5000);
};

const carouselKey = computed(() => {
  if (!props.data.Slide || props.data.Slide.length === 0) {
    return currentSlide.value;
  }
  return props.data.Slide[currentSlide.value].id;
});

onMounted(async () => {
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
