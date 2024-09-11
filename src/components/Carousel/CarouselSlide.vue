<template>
  <div class="slide-container" :style="{ backgroundImage: `url(http://localhost:1337${data.background})` }">
    <div class="row container">
      <div class=" justify-end flex">
        <div class="titles">
          <div class="title">{{ data.title }}</div>
          <div class="subtitle">{{ data.subTitle }}</div>
        </div>
      </div>
      <div class="">
        <div class="img-container text-center">
          <q-img no-spinner class="img" :src="'http://localhost:1337' + data.img"></q-img>
        </div>
      </div>
      <div class="">
        <div class="row info-container">
          <div v-if="data.badge !== ''" class="col-12">
            <p class="isNew">{{ data.badge }}</p>
          </div>
          <div class="price-container">
            <div class="price">{{ processedPrice.firstPart }}</div>
            <div class="decimal-price">{{ processedPrice.decimalPart }}</div>
            <div v-if="data.priceByMonth" class="by-month">/mois</div>
          </div>
          <div v-for="text in data.priceText" :key="text.id" class="price-text col-12">{{ text.text }}</div>
          <a class="button q-mt-sm" :href="data.button.url">{{ data.button }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  slideData: Object,
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

const data = ref({
  title: props.slideData?.title || '',
  subTitle: props.slideData?.subtitle || '',
  img: props.slideData?.img?.data?.attributes?.url || '',
  background: props.slideData?.background?.data?.attributes?.url || '',
  lightBackground: props.slideData?.lightBackground || false,
  badge: props.slideData?.badge || '',
  price: props.slideData?.price || '',
  priceByMonth: props.slideData?.priceByMonth || false,
  priceText: props.slideData?.priceText || [],
  button: props.slideData?.button || 'En profiter',
  offSetTop: props.slideData?.imgOffsetTop || 40,
});

const { firstPart, decimalPart } = processPrice(data.value.price);

const processedPrice = ref({
  firstPart,
  decimalPart,
});

const offSet = ref(
  data.value.offSetTop,
);

const textColor = ref('white');
const buttonBackgroundColor = ref('white');
const buttonColor = ref('black');

function changeColorText() {
  if (data.value.lightBackground) {
    textColor.value = 'black';
    buttonBackgroundColor.value = 'black';
    buttonColor.value = 'white';
  }
}

onMounted(() => {
  console.log('Mounted Data:', data.value);
  console.log('Mounted Data:', props.slideData);
  changeColorText();
});
</script>

<style scoped>
.img {
  width: 620px;
  top: v-bind(offSet + 'px');
  margin-left: 50px;
}

.slide-container {
  background-size: cover;
  height: 460px;
  width: 100%;
}

.container {
  max-width: 1280px;
  margin: 0 auto 24px;
  width: 100%;
}

.titles {
  width: 290px;
  height: 200px;
  padding-top: 143px;
  line-height: 40px;
  color: v-bind(textColor);
  font-size: 32px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-style: normal;
}

.info-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 340px;
  margin-left: 25px;
}

.price-text {
  color: v-bind(textColor);
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-style: normal;
}

.button {
  padding: 12px 24px 12px 24px;
  background-color: v-bind(buttonBackgroundColor);
  border-radius: 8px;
  text-decoration: none;
  color: v-bind(buttonColor);
  line-height: 16px;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-style: normal;
  display: inline-flex;
  width: fit-content;
  transition: box-shadow .2s cubic-bezier(.4,0,.2,1);
  cursor: pointer;
}

.button:hover {
  box-shadow: 0 0 12px rgba(24,24,24,0.16);
}

.subtitle {
  padding-bottom: 143px;
  color: v-bind(textColor);
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  padding-top: 20px;
  line-height: 24px;
}

.isNew {
  display: inline-block;
  margin-top: 2px;
  background-color: #FFE700;
  color: black;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-style: normal;
  padding: 0 8px 0 8px;
  margin-bottom: 12px;
  border-radius: 5px;
  letter-spacing: 0;
  height: 18px;
  font-size: 12px;
  p {
    margin: 0;
  }
}

.price {
  grid-area: b;
  line-height: 55px;
  padding-bottom: 8px;
  color: v-bind(textColor);
  font-size: 60px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-style: normal;
}

.price-container {
  position: relative;
  display: grid;
  grid-template-areas:
        "b a"
        "b c";
  grid-template-columns: auto 1fr;
}

.decimal-price {
  font-family: Poppins, sans-serif;
  font-size: 18px;
  line-height: normal;
  font-weight: bold;
  max-height: 15px;
  color: v-bind(textColor);
}

.by-month {
  font-family: Poppins, sans-serif;
  font-size: 12px;
  line-height: normal;
  font-weight: bold;
  max-height: 15px;
  color: v-bind(textColor);
}
</style>
