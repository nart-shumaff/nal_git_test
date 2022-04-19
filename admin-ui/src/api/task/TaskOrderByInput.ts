import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  assignedToId?: SortOrder;
  createdAt?: SortOrder;
  estimation?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
