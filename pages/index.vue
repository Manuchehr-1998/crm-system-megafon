<script setup lang="ts">
import type { ICard, IColumn } from "~/components/kanban/kanban.types";
import { convertCurrency } from "@/utils/convertCurrency";
import dayjs from "dayjs";
import { useKanbanQuery } from "~/components/kanban/useKanbanQuery";
import { generateColumnStyle } from "../components/kanban/generate-gradient";
import { EnumStatus } from "~/types/deals.types";
import { useMutation } from "@tanstack/vue-query";

useHead({
  title: "Home | CRM SYSTEM",
});

const dragCardRef = ref<ICard | null>(null);
const sourceColumnRef = ref<IColumn | null>(null);

const { data, isLoadding, refetch } = useKanbanQuery();

type TypeMutationVaribles = {
  docId: string;
  status?: EnumStatus;
};

const { mutate } = useMutation({
  mutationKey: ["move card"],
  mutationFn: ({ docId, status }: TypeMutationVaribles) =>
    DB.updateDocument(DB_ID, COLLECTION_DEALS, docId, {
      status,
    }),
  onSuccess: () => {
    refetch();
  },
});

function handleDragStart(card: ICard, column: IColumn) {
  dragCardRef.value = card;
  sourceColumnRef.value = column;
}

function handleDragOver(event: DragEvent) {
  event.preventDefault();
}

function handleDrop(targetColumn: IColumn) {
  if (dragCardRef.value && sourceColumnRef.value) {
    mutate({ docId: dragCardRef.value.id, status: targetColumn.id });
  }
}
</script>

<template>
  <div class="p-10" v-if="data">
    <h1 class="font-bold text-2xl mb-10">CRM system by Megafon</h1>
    <div v-if="isLoadding">Loading ...</div>
    <div v-else>
      <div class="grid grid-cols-5 gap-16">
        <div
          v-for="(column, index) in data"
          :key="column.id"
          @dragover="handleDragOver"
          @drop="() => handleDrop(column)"
        >
          <div
            class="rounded bg-slate-400 py-1 px-5 mb-2 text-center"
            :style="generateColumnStyle(index, data?.length)"
          >
            {{ column.name }}
          </div>
          <KanbanCreateDeal :refetch="refetch" :status="column.id" />
          <UiCard
            v-for="card in column.items"
            :key="card.id"
            class="mb-3"
            draggable="true"
            @dragstart="() => handleDragStart(card, column)"
          >
            <UiCardHeader role="button">
              <UiCardTitle>
                {{ card.name }}
              </UiCardTitle>
              <UiCardDescription>
                {{ convertCurrency(card.price) }}
              </UiCardDescription>
            </UiCardHeader>
            <UiCardContent>Компания {{ card.companyName }}</UiCardContent>
            <UiCardFooter>{{
              dayjs(card.$createdAt).format("DD MMMM YYYY")
            }}</UiCardFooter>
          </UiCard>
        </div>
      </div>
    </div>
  </div>
</template>
