import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TaskCreateNestedManyWithoutProjctesInput } from "./TaskCreateNestedManyWithoutProjctesInput";

export type ProjcteCreateInput = {
  description?: string | null;
  dueDate?: Date | null;
  name?: string | null;
  owner: UserWhereUniqueInput;
  startDate?: Date | null;
  tasks?: TaskCreateNestedManyWithoutProjctesInput;
};
