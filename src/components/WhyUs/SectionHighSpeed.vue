<template>
  <div class="card-container">
    <div v-for="card in data.card" :key="card.id" class="card" :class="{ 'card-reverse': card.reverse }">
      <div class="card-infos">
        <img class="img" :src="'http://localhost:1337' + card.img.data.attributes.url"/>
        <div class="infos">
          <h3 class="title">{{ card.title }}</h3>
          <p class="text">{{ card.text }}</p>
          <a class="link" :href="card.url">{{ card.urlText }}</a>
        </div>
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
  grid-template-columns: repeat(1, minmax(0, 1fr));
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
  flex-direction: row;
}

.infos {
  margin-left: 24px;
}

.img {
  width: 400px;
  height: 141px;
  border-radius: 8px;
}

.title {
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: black;
  height: 36px;
  line-height: 36px;
  margin-bottom: 8px;
  margin-top: 0;
}

.text {
  font-family: "Poppins", sans-serif;
  color: rgb(24, 24, 24);
  padding-bottom: 20px;
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

.card-reverse .card-infos {
  flex-direction: row-reverse;
}

.card-reverse .img {
  margin-left: 24px;
  margin-right: 0;
}
</style>
