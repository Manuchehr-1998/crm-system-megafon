<script setup lang="ts">
import { defineProps, ref } from "vue";

const props = defineProps({
  lableText: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div class="mb-3">
    <lable v-if="lableText" class="opacity-75 mb-o.5 block text-xs">
      lableText</lable
    >
    <div class="text-base"><slot /></div>
  </div>
</template>
