<script lang="ts" setup>
import { useAuthStore, useIsLoadingStore } from "~/store/auth.store";

const store = useAuthStore();
const isLoadingStore = useIsLoadingStore();
const router = useRouter();

const logout = async () => {
  isLoadingStore.set(true);
  await account.deleteSession("current");
  store.clear();
  await router.push("/login");
  isLoadingStore.set(false);
};
</script>

<template>
  <aside class="px-5 py-8 bg-white w-full h-full relative">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="/logo.png" width="100px" class="mx-auto" />
    </NuxtLink>
    <button
      @click="logout"
      class="absolute top-2 right-3 transition-colors hover:text-green-600"
    >
      <Icon name="line-md:logout" size="22px" />
    </button>
    <LayoutMenu />
  </aside>
</template>
