<script setup lang="ts">
import type { ICard, IColumn } from "~/components/kanban/kanban.types";

useHead({
  title: "Home | CRM SYSTEM",
});

const dragCardRef = ref<ICard | null>(null);
const sourseColumnRef = ref<IColumn | null>(null);
</script>

<template>
  <div class="p-10">
    <h1 class="font-bold text-2xl mb-10">CRM system by Megafon</h1>
    <div>
      <UiCard>
        <UiCardHeader role="button">name Card</UiCardHeader>
        <UiCardContent>Companiy</UiCardContent>
        <UiCardFooter>Date</UiCardFooter>
      </UiCard>
    </div>
  </div>
</template>
