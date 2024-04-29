<template>
  <div class="list-container q-mr-xl" :class="{ 'already-client-background': list.attributes.title === 'Déja client' }">
    <div class="title-container self-start">
      <div class="img-container">
        <q-img
          v-if="list.attributes.icon !== null"
          class="img"
          fit="cover"
          :class="{ 'hidden': !list.attributes.icon }"
          :src="'http://localhost:1337' + list.attributes?.icon?.data?.attributes?.url"
        />
      </div>
      <p class="list-title">{{ list.attributes.title }}</p>
    </div>
    <div class="list flex column items-start justify-start">
      <a
        class="link"
        v-for="item in list.attributes.navbaritems.data"
        :key="item.id"
        :href="item.attributes.url"
      >
<!--        <div class="img-container">
          <q-img
            v-if="list.attributes.navbar !== null"
            class="img"
            fit="cover"
            :class="{ 'hidden': !list.attributes.icon }"
            :src="'http://localhost:1337' + list.attributes?.icon?.data?.attributes?.url"
          />
        </div>-->
        <div class="row flex content-center">
          <p>{{ item.attributes.name }}</p>
          <div class="new" v-if="item.attributes.isNew === true">
            <p>Nouveau</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  list: Object,
});
</script>

<style scoped lang="scss">
.list-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.title-container {
  display: flex;
  align-items: center;
  margin: 24px 0 16px 0;
}

.img {
  width: 100%;
}

.img-container {
  width: 20px;
  height: 30px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hidden {
  display: none;
}

.list-title {
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-style: normal;
  margin: 0;
}

.link {
  height: 30px;
  color: #555;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  width: 100%;
  text-decoration: none;
}

.list {
  width: 100%;
}

.link:hover {
  cursor: pointer;
  color: #000000;
}

.already-client-background {
  background-color: #F2F2F2;
  padding: 0 24px 8px 24px;
  margin: 8px 0 0 0;
  border-radius: 8px;
  height: 100%;
  .img-container {
    display: none;
  }
  .title-container {
    margin: 16px 0 16px 0;
    display: flex;
    align-self: start;
  }
}

.new {
  margin-left: 8px;
  margin-top: 2px;
  background-color: rgba(217, 13, 37, 0.09);
  color: #D90D25;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-style: normal;
  padding: 0 8px 0 8px;
  border-radius: 5px;
  letter-spacing: 0;
  height: 18px;
  font-size: 12px;
  p {
    margin: 0;
  }
}
</style>
