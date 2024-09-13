<template>
  <div class="markdown-content" v-html="htmlContent" />
</template>

<script setup>
import { marked } from 'marked';

const props = defineProps({
  data: {
    type: Object,
  },
});

const htmlContent = marked(props.data.text);
</script>

<style>
</style>
