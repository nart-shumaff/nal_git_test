import { ProjcteUpdateManyWithoutUsersInput } from "./ProjcteUpdateManyWithoutUsersInput";
import { TaskUpdateManyWithoutUsersInput } from "./TaskUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  projctes?: ProjcteUpdateManyWithoutUsersInput;
  roles?: Array<string>;
  tasks?: TaskUpdateManyWithoutUsersInput;
  username?: string;
};
