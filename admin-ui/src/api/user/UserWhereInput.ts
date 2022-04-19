import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjcteListRelationFilter } from "../projcte/ProjcteListRelationFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  projctes?: ProjcteListRelationFilter;
  tasks?: TaskListRelationFilter;
  username?: StringFilter;
};
