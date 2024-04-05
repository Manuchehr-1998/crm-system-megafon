import { useQuery } from "@tanstack/vue-query";
import { DB_ID, COLLECTION_DEALS } from "../../utils/app.constants";
import type { IDeal } from "~/types/deals.types";
import { KANBAN_DATA } from "./kanban.data";

export function useKanbanQuery() {
  return useQuery({
    queryKey: ["deals"],
    queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS),
    select(data) {
      const newBoard = KANBAN_DATA.map((column) => ({
        ...column,
        items: [],
      }));
      const deals = data.documents as unknown as IDeal[];

      console.log(newBoard);

      for (const deal of deals) {
        const column = newBoard.find((col) => col.id === deal.status); // Corrected comparison
        if (column) {
          if (!column.items) {
            column.items = [];
          }
          column.items.push({
            $createdAt: deal.$createdAt,
            id: deal.$id,
            name: deal.name,
            price: deal.price,
            companyName: deal.customer.name,
            status: column.name,
          });
        }
      }
      return newBoard;
    },
  });
}
