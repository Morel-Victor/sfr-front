<template>
  <q-tooltip
    :style="{ 'display': tooltipVisible ? 'block' : 'none' }"
    class="tooltip"
    :offset="[25, -5]"
    anchor="bottom right"
  >
    {{ text }}
  </q-tooltip>
</template>

<script setup>
defineProps({
  text: String,
  tooltipVisible: Boolean,
});
</script>

<style scoped>
:global(.tooltip.q-tooltip--style) {
  font-size: 10px;
  padding: 5px 8px 4px 8px;
  border-radius: 0 !important;
  background-color: rgba(0, 0, 0, 0.85);
  height: 25px;
}
</style>
