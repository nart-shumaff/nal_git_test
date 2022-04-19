import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjcteUpdateManyWithoutTasksInput } from "./ProjcteUpdateManyWithoutTasksInput";

export type TaskUpdateInput = {
  assignedTo?: UserWhereUniqueInput | null;
  estimation?: number | null;
  project?: ProjcteUpdateManyWithoutTasksInput;
  startDate?: Date | null;
  status?: "New" | "Pending" | "Ongoing" | "Done";
  title?: string | null;
};
