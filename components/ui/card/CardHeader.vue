<script setup lang="ts">
import { cn } from "@/utils/utils";

const props = defineProps({
  class: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div :class="cn('flex flex-col space-y-1.5 p-3', props.class)">
    <slot />
  </div>
</template>
