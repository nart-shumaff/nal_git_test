import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TaskUpdateManyWithoutProjctesInput } from "./TaskUpdateManyWithoutProjctesInput";

export type ProjcteUpdateInput = {
  description?: string | null;
  dueDate?: Date | null;
  name?: string | null;
  owner?: UserWhereUniqueInput;
  startDate?: Date | null;
  tasks?: TaskUpdateManyWithoutProjctesInput;
};
