<script setup lang="ts">
import { useDealSlideStore } from "~/store/deals-slide.store";
import type { IDeal } from "~/types/deals.types";
import { useComments } from "./useComments";
import { useCreateComment } from "./useCreateComment";
import dayjs from "dayjs";
const store = useDealSlideStore();

const { data, refetch, isLoadding } = useComments();
const { commentRef, writeComments } = useCreateComment({ refetch });

const card = data as unknown as IDeal;
console.log(card);
</script>
<template>
  <UiInput
    placeholder="Оставте коментарий"
    v-model="commentRef"
    @keyup.enter="writeComments"
  />
  <UiSkeleton v-if="isLoadding" class="w-full h-[76px] rounded mt-5" />
  <div v-else-if="card">
    <div
      v-for="comment in card?.comments"
      :key="comment.id"
      class="items-start mt-5"
    >
      <Icon name="radix-icons:chat-bubble" class="mr-3 mt-1 size='20'" />
      <div class="mb-2 text-sm">
        Коментарий {{ dayjs(comment.$createdAt).format("HH:mm") }}
      </div>
      <p>{{ comment.text }}</p>
    </div>
  </div>
</template>
