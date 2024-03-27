<script lang="ts" setup></script>

<template>
  <section class="grid" style="min-height: 100vh">
    <LayoutSidebar />
    <slot />
  </section>
</template>

<style scoped>
.grid {
  grid-template-columns: 1fr 6fr;
}
</style>
