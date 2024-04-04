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
  <div
    :class="cn('rounded-lg shadow bg-white text-card-foreground', props.class)"
  >
    <slot />
  </div>
</template>
