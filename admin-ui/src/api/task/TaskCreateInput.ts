import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjcteCreateNestedManyWithoutTasksInput } from "./ProjcteCreateNestedManyWithoutTasksInput";

export type TaskCreateInput = {
  assignedTo?: UserWhereUniqueInput | null;
  estimation?: number | null;
  project?: ProjcteCreateNestedManyWithoutTasksInput;
  startDate?: Date | null;
  status: "New" | "Pending" | "Ongoing" | "Done";
  title?: string | null;
};
