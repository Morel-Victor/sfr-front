<template>
  <div class="container row flex justify-between">
    <div v-for="card in data" :key="card.id" class="card">
      <img class="img" :src="'http://localhost:1337' + card.img"  alt="img"/>
      <div class="badge-container">
        <div
          v-if="card.firstBadgeText !== ''"
          :class="['badge', 'badge-first', { 'black-badge': card.firstBadgeColor.toUpperCase() === '#FFE700' }]"
          :style="{ background: card.firstBadgeColor }"
        >
          {{ card.firstBadgeText }}
        </div>
        <div
          v-if="card.secondBadgeText !== ''"
          :class="['badge', 'badge-second', { 'black-badge': card.secondBadgeColor.toUpperCase() === '#FFE700' }]"
          :style="{ background: card.secondBadgeColor }"
        >
          {{ card.secondBadgeText }}
        </div>
      </div>
      <h1 class="title">{{ card.title }}</h1>
      <p class="subtitle">{{ card.subtitle }}</p>
      <div class="row scoring-container">
        <div class="scoring" v-if="card.scoring !== 0">{{ card.scoring }}/5</div>
        <div class="stars" v-if="card.scoring !== 0">
          <q-img
            v-for="index in 5"
            :key="index"
            :src="getStarImage(card.scoring, index)"
            alt="star"
            class="star"
            height="16px"
            width="16px"
          ></q-img>
        </div>
        <div class="opinions" v-if="card.scoring !== 0">({{ card.opinions }} avis)</div>
      </div>
      <div class="under-card">
        <div class="row">
          <div class="price-container">
            <div class="price">{{ card.priceFirstPart }}</div>
            <div class="decimal-price">{{ card.priceDecimalPart }}</div>
            <div v-if="card.priceByMonth" class="by-month">/mois</div>
          </div>
        </div>
        <div v-if="card.firstSubPriceText !== ''" class="q-pt-sm sub-price-text">{{ card.firstSubPriceText }}</div>
        <div v-else class="q-pt-sm sub-price-text"></div>
        <div class="sub-price-text">{{ card.secondSubPriceText }}</div>
        <div class="q-pt-sm sub-price-text">{{ card.agreement }}</div>
      </div>
      <a :href="card.url" class="link">{{ card.urlText }}</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  data: Object,
});

const processPrice = (priceString) => {
  const numericPart = priceString.replace(/[^\d]/g, '');
  const euroIndex = priceString.indexOf('€');

  let firstPart = '';
  let decimalPart = '';

  if (euroIndex !== -1) {
    if (euroIndex > 0) {
      firstPart = numericPart.substring(0, euroIndex);
    }
    decimalPart = priceString.substring(euroIndex);
  }

  return { firstPart, decimalPart };
};

const data = ref(props.data.card.map((card) => {
  const { firstPart, decimalPart } = processPrice(card.price);

  return {
    ...card,
    title: card.title ? card.title : '',
    subTitle: card.subtitle ? card.subtitle : '',
    scoring: card.scoring ? card.scoring : 0,
    opinions: card.opinions ? card.opinions : 0,
    priceFirstPart: firstPart,
    priceDecimalPart: decimalPart,
    agreement: card.agreement ? card.agreement : '',
    priceByMonth: card.priceByMonth ? card.priceByMonth : false,
    urlText: card.urlText ? card.urlText : '',
    url: card.url ? card.url : '',
    img: card.img.data.attributes.url ? card.img.data.attributes.url : '',
    firstBadgeText: card.firstBadgeText ? card.firstBadgeText : '',
    firstBadgeColor: card.firstBadgeColor ? card.firstBadgeColor : '',
    secondBadgeText: card.secondBadgeText ? card.secondBadgeText : '',
    secondBadgeColor: card.secondBadgeColor ? card.secondBadgeColor : '',
    firstSubPriceText: card.firstSubPriceText ? card.firstSubPriceText : '',
    secondSubPriceText: card.secondSubPriceText ? card.secondSubPriceText : '',
  };
}));
const getStarImage = (score, index) => {
  if (score >= index) {
    return '/icons/star-full.svg';
  } if (score >= index - 0.5) {
    return '/icons/star-middle.svg';
  }
  return '/icons/star-empty.svg';
};
</script>

<style scoped>
.container {
  max-width: 1280px;
  margin: 40px auto 24px;
  width: calc(100% - 64px);
}

.card {
  width: 400px;
  height: 633px;
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  margin: 0 0 40px 0;
  position: relative;
  text-align: left;
  display: grid;
  grid-row: span 7;
  grid-template-rows: subgrid;
}

.scoring-container {
  min-height: 33px;
}

.img {
  height: 198px;
  max-width: 100%;
  margin-bottom: 34px;
  display: block;
  object-fit: contain;
  transition: 0.5s ease-out transform;
}

.card:hover {
  cursor: pointer;
  .img {
    transform: scale(1.1);
  }
}

.badge-container {
  height: 34px;
}

.badge {
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: white;
  height: 25px;
  line-height: normal;
  display: inline-block;
  margin: 0 8px 8px 0;
}

.black-badge {
  color: black;
}

.title {
  display: block;
  font-family: Poppins, sans-serif;
  font-weight: bold;
  font-size: 24px;
  line-height: normal;
  margin: 0 0 8px 0;
  max-height: 72px;
  text-decoration: none;
  color: black;
}

.subtitle {
  font-family: Poppins, sans-serif;
  font-size: 14px;
  line-height: normal;
  min-height: 29px;
  color: #242424;
}

.scoring {
  font-family: Poppins, sans-serif;
  font-size: 12px;
  line-height: normal;
  font-weight: bold;
  padding-top: 3px;
  padding-right: 6px;
}

.opinions {
  font-family: Poppins, sans-serif;
  font-size: 12px;
  line-height: normal;
  padding-top: 3px;
  padding-left: 6px;
}

.price {
  font-family: Poppins, sans-serif;
  font-size: 32px;
  max-height: 30px;
  font-weight: bold;
  grid-area: b;
  line-height: 35px;
  padding-bottom: 8px;
}

.price-container {
  position: relative;
  display: grid;
  grid-template-areas:
        "b a"
        "b c";
}

.decimal-price {
  font-family: Poppins, sans-serif;
  font-size: 12px;
  line-height: normal;
  font-weight: bold;
  max-height: 15px;
}

.by-month {
  font-family: Poppins, sans-serif;
  font-size: 12px;
  line-height: normal;
  font-weight: bold;
  max-height: 15px;
}

.sub-price-text{
  font-family: Poppins, sans-serif;
  min-height: 29px;
}

.link {
  position: relative;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-style: normal;
  color: #D90D25;
  padding: 0 13px 0 0;
  text-align: center;
  width: max-content;
  cursor: pointer;
  text-decoration: none;
  margin: 24px auto 16px auto;
  height: 0;
}

.link:after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  right: 1px;
  top: 11px;
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
