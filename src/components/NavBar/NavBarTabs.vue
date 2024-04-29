<template>
  <div class="navbar-tabs-container">
    <div class="container content-center"
         v-for="(tab, index) in tabsData"
         :key="tab.id"
         @mouseenter="index !== tabsData.length - 1 && tab.overlay && showOverlay(tab)"
         @mouseleave="hideOverlay()"
         :class="{ 'red-link': index === links.length - 1 }"
    >
      <a :href="tab.url">
        {{ tab.name }}
      </a>
      <div v-if="tab.overlay" class="overlay">
        <NavBarOverlay :navlists="tab.navlists.data" :badges="tab.badges"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { api } from 'boot/axios';
import NavBarOverlay from './NavBarOverlay.vue';

const tabsData = ref([]);
async function fetchTabs() {
  const url = '/nav-bars?populate=deep';
  const { data } = await api.get(url);
  tabsData.value = data.data[0].attributes.tab;
}

const activeIndex = ref(-1);

const showOverlay = (index) => {
  activeIndex.value = index;
};

const hideOverlay = () => {
  activeIndex.value = -1;
};

const links = ref([
  {
    text: 'Box internet',
    url: 'https://www.sfr.fr/offre-internet',
    overlay: true,
  },
  {
    text: 'Forfaits mobile',
    url: 'https://www.sfr.fr/offre-mobile',
    overlay: true,
  },
  {
    text: 'Téléphones',
    url: 'https://www.sfr.fr/offre-mobile/telephone-portable',
    overlay: true,
  },
  {
    text: 'Box + Mobile',
    url: 'https://www.sfr.fr/internet-mobile',
    overlay: true,
  },
  {
    text: 'Maison Sécurisée',
    url: 'https://www.sfr.fr/maison/',
    overlay: true,
  },
  {
    text: 'TV',
    url: 'https://www.sfr.fr/tv-sfr',
    overlay: true,
  },
  {
    text: 'Bons plans',
    url: 'https://www.sfr.fr/offre-mobile/bons-plans',
    overlay: false,
  },
]);

onMounted(() => fetchTabs());
</script>

<style scoped>
.navbar-tabs-container {
  height: 56px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 5px 0 #2222;
}

a {
  color: #242424;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  padding: 4px 20px 0 20px;
  text-decoration: none;
}

.container {
  position: relative;
  height: 56px;
  cursor: pointer;
  margin-top: 5px;
  border-bottom: 7px solid transparent;
  transition: border-color 0s;
}

.container:hover {
  border-bottom-color: rgba(128, 128, 128, 0.45);
}

.overlay {
  position: fixed;
  top: 126px;
  left: 0;
  right: 0;
  background-color: white;
  color: black;
  cursor: initial;
  overflow: hidden;
  height: 0;
  transition: height 0.3s;
  z-index: 0;
  will-change: transform;
}

.container:hover .overlay {
  height: 400px;
}

.red-link a {
  color: #E2001A;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-style: normal;
}
</style>
