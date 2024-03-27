<script lang="ts" setup></script>

<template>
  <aside class="px-5 py-8 bg-white w-full h-full relative">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="/logo.png" width="100px" class="mx-auto" />
    </NuxtLink>
    <button
      class="absolute top-2 right-3 transition-colors hover:text-green-600"
    >
      <Icon name="line-md:logout" size="22px" />
    </button>
    <LayoutMenu />
  </aside>
</template>
