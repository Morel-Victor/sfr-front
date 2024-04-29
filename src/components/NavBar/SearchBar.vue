<template>
  <q-input dense debounce="400" class="search" type="text"
           placeholder="Rechercher un téléphone, un service, ..."
           borderless
  >
    <template v-slot:append>
      <q-img src="/icons/search.svg" fit="cover" class="search-icon"/>
    </template>
  </q-input>
</template>

<script setup>
</script>

<style scoped lang="scss">
.search {
  width: 332px;
  height: 40px;
  padding-left: 16px;
  margin: 0 40px 0 40px;
  border-radius: 8px;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  max-height: 65px;
  background-color: $dark;
}

.search-icon {
  height: 20px;
  width: 20px;
  margin-right: 10px;
}
</style>
