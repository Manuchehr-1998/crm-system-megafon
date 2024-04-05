import { DB_ID, COLLECTION_COMMENTS } from "../../../utils/app.constants";
import { useMutation } from "@tanstack/vue-query";
import { v4 as uuid } from "uuid";
import { useDealSlideStore } from "~/store/deals-slide.store";

export function useCreateComment({ refetch }: { refetch: () => void }) {
  const store = useDealSlideStore();
  const commentRef = ref<string>();

  const { mutate } = useMutation({
    mutationKey: ["add comments", commentRef.value],
    mutationFn: () =>
      DB.createDocument(DB_ID, COLLECTION_COMMENTS, uuid(), {
        text: commentRef.value,
        deal: store.card?.id,
      }),
    onSuccess: () => {
      refetch();
      commentRef.value = "";
    },
  });

  const writeComments = () => {
    if (!commentRef.value) return;
    mutate();
  };
  return {
    writeComments,
    commentRef,
  };
}
