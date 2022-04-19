import { ProjcteWhereInput } from "./ProjcteWhereInput";
import { ProjcteOrderByInput } from "./ProjcteOrderByInput";

export type ProjcteFindManyArgs = {
  where?: ProjcteWhereInput;
  orderBy?: Array<ProjcteOrderByInput>;
  skip?: number;
  take?: number;
};
