<template>
  <div class="footer">
    <div class="row">
      <div class="networks flex column">
        <a :href="logoUrl">
          <img class="logo" src="/logo.svg"/>
        </a>
        <div class="logo-networks row">
          <img class="facebook" src="/networks/facebook.svg"/>
          <img class="twitter" src="/networks/twitter.svg"/>
          <img class="youtube" src="/networks/youtube.svg"/>
        </div>
        <p class="network-text">Suivez-nous sur les réseaux</p>
      </div>
      <div class="flex column list" v-for="list in footerData.attributes?.lists" :key="list.id">
        <div class="title">{{ list.title }}</div>
        <a
          v-for="link in list.sublink"
          :key="link.id"
          :href="link.url"
          class="url"
        >
          <p class="link">{{ link.text }}</p>
        </a>
      </div>
    </div>
    <div class="row under-link-container">
      <a
        v-for="link in footerData.attributes?.underlinks"
        :key="link.id"
        :href="link.url"
        class="under-url"
      >
        <p class="under-link">{{ link.text }}</p>
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { api } from 'boot/axios';

const footerData = ref([]);
async function fetchFooter() {
  const url = '/footers?populate=deep';
  const { data } = await api.get(url);
  footerData.value = data.data[0];
}

const logoUrl = ref('www.sfr.fr');

onMounted(() => {
  fetchFooter();
});
</script>

<style scoped>
.footer {
  max-width: 1280px;
  margin: 40px auto 24px;
  width: calc(100% - 64px);
}

.networks {
  width: 148px;
  margin-top: 16px;
  margin-right: 52px;
}

.logo {
  margin-top: 24px;
  margin-bottom: 24px;
  height: 78px;
  width: 80px;
}

.facebook,
.twitter,
.youtube {
  height: 25px;
  width: 24px;
}

.facebook,
.twitter {
  margin-right: 24px;
}

.network-text {
  position: static;
  margin: 24px 0;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  line-height: 20px;
}

.list {
  padding-top: 40px;
  width: 248px;
  margin-right: 24px;
}

.list:last-child {
  margin-right: 0;
}

.title {
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  padding: 0 0 24px 0;
}

.url {
  text-decoration: none;
}

.link {
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  margin: 0 0 12px 0;
  color: white;
}

.under-link-container {
  display: flex;
  justify-content: space-between;
  margin-top: 44px;
}

.under-link {
  line-height: 0;
}

.under-url {
  margin: 0 24px 10px 0;
  line-height: 0;
  color: white;
  font-size: 12px;
  font-family: "Poppins", sans-serif;
}
</style>
