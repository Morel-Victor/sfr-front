<template>
  <div class="container row">
    <div v-for="item in data.infos" :key="item.id">
      <div class="item-column flex column flex-center">
        <q-img class="img" :src="'http://localhost:1337' + item.icon.data.attributes.url"></q-img>
        <p class="text" v-html="insertLineBreak(item.text)"></p>
        <a class="link" :href="item.url">{{ item.urlText }}</a>
      </div>
    </div>
    <router-link :to="{ name: data.button?.url }">
      <div class="btn">
        <div class="choose-link">{{ data.button?.text }}</div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
});

const insertLineBreak = (text) => {
  const words = text.split(' ');
  if (words.length > 3) {
    words.splice(3, 0, '<br>');
  }
  return words.join(' ');
};
</script>

<style scoped>
.container {
  max-width: 1280px;
  height: 280px;
  width: calc(100% - 64px);
  margin: 0 auto 80px;
  padding: 24px 24px 90px 24px;
  gap: 22px;
  flex-wrap: wrap;
  position: relative;
  justify-content: space-evenly;
  background: white;
  border-radius: 12px;
}

.img {
  height: 64px;
  width: 62px;
  margin-bottom: 24px;
}

.item-column {
  width: 225px;
  text-align: center;
}

.text {
  color: #000000;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-style: normal;
  margin-bottom: 16px;
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

.btn {
  width: fit-content;
  margin: 0 auto;
  position: absolute;
  bottom: 24px;
  left: 0;
  right: 0;
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
</style>
