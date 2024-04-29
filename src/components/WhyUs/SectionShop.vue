<template>
  <div class="card-container">
    <div v-for="card in data.shop" :key="card.id" class="card">
      <div class="card-infos">
        <img class="img" :src="'http://localhost:1337' + card.img.data.attributes.url"/>
        <h3 class="title">{{ card.title }}</h3>
        <p class="text">{{ card.text }}</p>
        <a class="link" :href="card.url">{{ card.urlText }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
});
</script>

<style scoped>
.card-container {
  max-width: 1280px;
  margin: 40px auto 24px;
  width: calc(100% - 64px);
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.card {
  display: grid;
  gap: 40px;
  color: white;
  background: #FFFFFF;
  box-shadow: 0 8px 16px rgba(24, 24, 24, 0.02);
  border-radius: 8px;
  padding: 24px;
}

.card-infos {
  display: flex;
  flex-direction: column;
}

.img {
  width: 572px;
  height: 196px;
  border-radius: 8px;
}

.title {
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: black;
  margin-top: 24px;
  margin-bottom: 0;
}

.text {
  font-family: "Poppins", sans-serif;
  color: rgb(24, 24, 24);
}

.link {
  position: relative;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-style: normal;
  color: #D90D25;
  padding: 0 13px 0 0;
  cursor: pointer;
  text-decoration: none;
  align-self: center;
}

.link:after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  right: 1px;
  top: -1px;
  bottom: 0;
  margin: auto;
  border-radius: 2px;
  border: 2px solid;
  border-left: 0;
  border-bottom: 0;
  transform: rotate(45deg);
  transition: all .2s cubic-bezier(.4,0,.2,1);
}

.link:hover:after {
  right: -3px;
}
</style>
