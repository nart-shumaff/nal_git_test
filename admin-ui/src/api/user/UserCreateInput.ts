import { ProjcteCreateNestedManyWithoutUsersInput } from "./ProjcteCreateNestedManyWithoutUsersInput";
import { TaskCreateNestedManyWithoutUsersInput } from "./TaskCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  projctes?: ProjcteCreateNestedManyWithoutUsersInput;
  roles: Array<string>;
  tasks?: TaskCreateNestedManyWithoutUsersInput;
  username: string;
};
