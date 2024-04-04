<script setup lang="ts">
import { useMutation } from "@tanstack/vue-query";
import { v4 as uuid } from "uuid";
import { defineProps, ref } from "vue";
import { DB_ID, COLLECTION_DEALS } from "../../utils/app.constants";
import type { IDeal } from "~/types/deals.types";

interface IDealFormState extends Pick<IDeal, "name" | "price"> {
  customer: {
    email: string;
    name: string;
  };
  status: string;
}
const isOpenForm = ref(false);

const props = defineProps({
  status: {
    type: String,
    default: "",
  },
  refetch: {
    type: Function,
  },
});

const { handleSubmit, handleReset, defineField } = useForm<IDealFormState>({
  initialValues: {
    status: props.status,
  },
});

const [name, nameAttrs] = defineField("name");
const [price, priceAttrs] = defineField("price");
const [customerEmail, customerEmailAttrs] = defineField("customer.email");
const [customerName, customerNameAttrs] = defineField("customer.name");

const { mutate, isPending } = useMutation({
  mutationKey: ["create a new deal"],
  mutationFn: (data: IDealFormState) =>
    DB.createDocument(DB_ID, COLLECTION_DEALS, uuid(), data),
  onSuccess() {
    props.refetch && props.refetch();
    handleReset();
  },
});

const onSubmit = handleSubmit((values) => {
  mutate(values);
});
</script>

<template>
  <div class="text-center mb-2">
    <button
      class="transition-all hover:text-green-600"
      @click="isOpenForm = !isOpenForm"
    >
      <Icon
        v-if="isOpenForm"
        name="radix-icons:arrow-up"
        class="fade-in-100 fade-out-0"
      />
      <Icon v-else name="+" class="fade-in-100 fade-out-0" />
    </button>
  </div>
  <form v-if="isOpenForm" @submit="onSubmit">
    <UiInput
      placeholder="Наименование"
      v-model="name"
      v-bind="nameAttrs"
      type="text"
      class="mb-3"
    />
    <UiInput
      placeholder="Сумма"
      v-model="price"
      v-bind="priceAttrs"
      type="number"
      class="mb-3"
    />
    <UiInput
      placeholder="Email"
      v-model="customerEmail"
      v-bind="customerEmailAttrs"
      type="email"
      class="mb-3"
    />
    <UiInput
      placeholder="Компания"
      v-model="customerName"
      v-bind="customerNameAttrs"
      type="text"
      class="mb-3"
    />
    <button :disabled="isPending">
      {{ isPending ? "Загрузка..." : "Добавит" }}
    </button>
  </form>
</template>

function useMutation(arg0: { mutationKey: string[]; mutationFn: (data:
IDealFormState) => any; onSuccess(): void; }): { mutate: any; isPending: any; }
{ throw new Error("Function not implemented."); } function useMutation(arg0: {
mutationKey: string[]; mutationFn: (data: IDealFormState) => any; onSuccess():
void; }): { mutate: any; isPending: any; } { throw new Error("Function not
implemented."); }
