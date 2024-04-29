<template>
  <div class="news-container row justify-between">
    <a :href="card.url" v-for="card in data.card" :key="card.id" class="card">
      <div class="card-header">
        <img class="img" :src="'http://localhost:1337' + card.img.data.attributes.url" alt=""/>
        <div class="badge">{{ card.badge }}</div>
      </div>
      <div class="sub-card">
        <div class="date">{{ card.date }}</div>
        <div class="title">{{ card.title }}</div>
      </div>
    </a>
    <div class="btn">
      <a :href="data.button.url" class="choose-link">{{ data.button.text }}</a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
});
</script>

<style scoped>
.news-container {
  max-width: 1280px;
  margin: 40px auto 24px;
  width: calc(100% - 64px);
}

.card {
  position: relative;
  width: 400px;
  height: 320px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 24px 4px rgba(0, 0, 0, 0.06);
}

.btn {
  width: fit-content;
  margin: 40px auto 40px auto;
  border: solid 1px black;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(24, 24, 24, 0.14);
  transition: box-shadow .2s cubic-bezier(.4,0,.2,1);
}

.choose-link {
  display: block;
  position: relative;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  padding: 12px 24px;
  text-align: center;
  width: 100%;
  color: black;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
}

.btn:hover {
  box-shadow: 0 6px 12px rgba(24, 24, 24, 0.22);
}

.img {
  width: 400px;
  height: 225px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.badge {
  position: absolute;
  color: #fff;
  font-family: Poppins, sans-serif;
  background-color: black;
  font-weight: bold;
  font-size: 10px;
  border-radius: 4px;
  padding: 5px 8px;
  top: 12px;
  left: 12px;
}

.card-header {
  z-index: 100;
  height: 225px;
}

.sub-card {
  height: calc(320px - 192px);
  z-index: 300;
  top: 192px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  position: absolute;
  background-color: white;
  width: 100%;
  padding: 16px 24px;
  text-align: left;
}

.date {
  font-family: Poppins, sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: #181818;
  display: block;
  margin-bottom: 8px;
}

.title {
  font-family: Poppins, sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #181818;
  margin-bottom: 8px;
}
</style>
