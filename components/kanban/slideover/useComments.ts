import { useDealSlideStore } from "~/store/deals-slide.store";
import { useQuery } from "@tanstack/vue-query";
import { DB_ID, COLLECTION_DEALS } from "../../../utils/app.constants";

export function useComments() {
  const store = useDealSlideStore();
  const cardId = store.card?.id || "";
  return useQuery({
    queryKey: ["deal", cardId],
    queryFn: () => DB.getDocument(DB_ID, COLLECTION_DEALS, cardId),
  });
}
