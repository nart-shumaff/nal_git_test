import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjcteListRelationFilter } from "../projcte/ProjcteListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TaskWhereInput = {
  assignedTo?: UserWhereUniqueInput;
  estimation?: IntNullableFilter;
  id?: StringFilter;
  project?: ProjcteListRelationFilter;
  startDate?: DateTimeNullableFilter;
  status?: "New" | "Pending" | "Ongoing" | "Done";
  title?: StringNullableFilter;
};
