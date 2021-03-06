import { SortOrder } from "../../util/SortOrder";

export type ProjcteOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  ownerId?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
