<template>
  <q-layout view="hHr lpR fFr" :class="{ 'drawer-open': rightDrawerOpen }" class="bg-dark">

    <q-header
      class="bg-primary text-white header"
      reveal
      :class="{ 'blur': rightDrawerOpen }"
    >
      <q-toolbar class="toolbar">
          <div class="flex">
            <div class="row items-center img-search">
              <img src="/logo.svg" height="70" width="72" alt="logo">
              <SearchBar />
            </div>
            <div class="row items-center">
              <div class="link-container">
                <a class="link">
                  {{ appBarLinks.app }}
                </a>
                <a
                  v-for="index in Object.keys(appBarLinks).slice(1)"
                  :key="index" class="link">
                  {{ appBarLinks[index] }}
                </a>
              </div>
              <div class="btn-link-container">
                <q-btn flat class="btn-icon" @mouseenter="setActive" @mouseleave="setActive">
                  <TooltipLink :text="tooltip.cart" :tooltipVisible="active"/>
                  <q-img src="/icons/cart.svg" fit="cover" class="cart-icon"/>
                </q-btn>
                <q-btn flat class="btn-icon" @mouseenter="setActive" @mouseleave="setActive">
                  <TooltipLink :text="tooltip.email" :tooltipVisible="active"/>
                  <q-img src="/icons/email.svg" fit="cover" class="email-icon"/>
                </q-btn>
                <q-btn
                  flat
                  class="btn-icon-login"
                  @click="toggleRightDrawer"
                  @mouseenter="setActive"
                  @mouseleave="setActive"
                >
                  <div class="container-login">
                    <TooltipLink :text="tooltip.login" :tooltipVisible="active"/>
                    <q-img src="/icons/login.svg" fit="cover" class="login-icon"/>
                  </div>
                </q-btn>
              </div>
            </div>
          </div>
      </q-toolbar>

      <NavBarTabs />

    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay :width="400">
      <div  class="drawer-container">
        <div class="close-icon-container flex items-center justify-center">
          <q-icon size="xs" name="close" class="close-icon" @click="toggleRightDrawer"></q-icon>
        </div>
        <div class="client-space">
          <q-img src="/icons/drawer.svg" fit="cover" class="login-icon-drawer"/>
          <h2 class="client-space-title">Espace Client</h2>
          <p class="client-space-text">Identifiez-vous pour accéder à votre Espace Client</p>
        </div>
        <div class="login-button">
          <a :href="login" class="login-button-text flex justify-center">Se connecter</a>
        </div>
        <a :href="emergency" class="drawer-link row q-pt-sm q-pb-sm items-center">
          <q-img src="icons/danger.svg" height="18px" width="20px" class="q-mr-sm"/>
          <p class="drawer-link-text">Accès aux actes d'urgence</p>
        </a>
        <a :href="order" class="drawer-link row q-pt-sm q-pb-sm items-center">
          <q-img src="icons/order.svg" height="19px" width="19px" class="q-mr-sm"/>
          <p class="drawer-link-text">Suivi de commande</p>
        </a>
        <a :href="move" class="drawer-link row q-pt-sm q-pb-sm items-center">
          <q-img src="icons/move.svg" height="13px" width="20px" class="q-mr-sm"/>
          <p class="drawer-link-text">Déménagement</p>
        </a>
      </div>
    </q-drawer>

    <q-page-container :class="{ 'blur': rightDrawerOpen }">
      <router-view/>
    </q-page-container>

    <div class="text-white footer-container" :class="{ 'blur': rightDrawerOpen }">
      <FooterBar />
    </div>

    <div class="overlay" v-if="rightDrawerOpen" @click="toggleRightDrawer"></div>

  </q-layout>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import SearchBar from 'components/NavBar/SearchBar.vue';
import TooltipLink from 'components/NavBar/TooltipLink.vue';
import NavBarTabs from 'components/NavBar/NavBarTabs.vue';
import FooterBar from 'components/FooterBar.vue';

const login = 'https://www.sfr.fr/cas/login?service=https%3A%2F%2Fwww.sfr.fr%2Faccueil%2Fj_spring_cas_security_check';

const emergency = 'https://assistance.sfr.fr/actes-urgence.html';
const order = 'https://www.sfr.fr/suivi-commande/';
const move = 'https://www.sfr.fr/offre-internet/demenagement';

const rightDrawerOpen = ref(false);
const active = ref(false);

const appBarLinks = ref({
  app: 'Apps & services',
  pro: 'Pro',
  help: 'Aide',
  shop: 'Trouver une boutique',
});

const tooltip = ref({
  cart: 'Panier',
  email: 'Mail',
  login: 'Client',
});

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};

const setActive = () => {
  active.value = !active.value;
};

watchEffect(() => {
  if (rightDrawerOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});
</script>

<style scoped>
/* Nav */

.header {
  height: 126px;
  z-index: 2000;
}

.toolbar {
  padding: 0 32px;
  max-width: 1344px;
  width: calc(100% - 64px);
  margin: 0 auto 0;
}

.link {
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  padding: 0 16px 0 16px;
}

.link:hover {
  cursor: pointer;
}

.img-search {
  width: 670px;
}

.link-container {
  width: calc(1300 - 690px);
}

.btn-icon {
  height: 56px;
  width: 56px;
}

.btn-icon-login {
  height: 39px;
  width: 39px;
  padding: 0;
  margin-left: 17px;
}

.container-login {
  height: 40px;
  width: 40px;
  background-color: #D90D25;
  border-radius: 8px;
}

.cart-icon {
  width: 17px;
}

.email-icon {
  width: 21px;
  margin-top: 2px;
}

.login-icon {
  width: 21px;
  margin-top: 8px;
  margin-right: 1px;
}

/* Drawer */

.drawer-container {
  padding: 24px 24px 24px 24px;
  z-index: 9990;
}

.drawer-open {
  overflow: hidden;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2989;
  background: rgba(53, 53, 53, 0.24);
  pointer-events: auto;
}

.blur {
  filter: blur(2px);
}

.close-icon-container {
  height: 24px;
  width: 24px;
  background-color: rgba(0, 0, 0, 1);
  border-radius: 30px;
  cursor: pointer;
  color: white;
}

.client-space {
  margin-top: 80px;
}

.login-icon-drawer {
  width: 26px;
}

.client-space-title {
  font-size: 25px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-style: normal;
  margin: 0;
  line-height: 40px;
}

.client-space-text {
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: rgba(0, 0, 0, 0.73);
  padding-top: 14px;
  margin: 0;
  line-height: 22px;
}

.login-button {
  background-color: #D90D25;
  box-shadow: 0 4px 8px rgba(153, 0, 0, 0.24);
  margin-bottom: 16px;
  border-radius: 8px;
  height: 40px;
  transition: all 0.3s;
}

.login-button:hover {
  box-shadow: 0 4px 8px rgba(153, 0, 0, 0.35);
  cursor: pointer;
}

.login-button-text {
  font-size: 15px;
  padding: 9px 24px 12px 24px;
  margin: 16px 0 16px 0;
  color: white;
  font-weight: bolder;
}

a {
  text-decoration: none;
}

.drawer-link, .drawer-link:visited, .drawer-link:hover, .drawer-link:active {
  color: inherit;
  height: 40px;
}

.drawer-link-text {
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: rgba(0, 0, 0, 0.83);
  margin: 0;
}

/* Footer */

.footer-container {
  z-index: 80;
  background-color: #181818;
  height: 435px;
}
</style>
