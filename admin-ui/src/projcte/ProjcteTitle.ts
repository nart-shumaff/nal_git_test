import { Projcte as TProjcte } from "../api/projcte/Projcte";

export const PROJCTE_TITLE_FIELD = "name";

export const ProjcteTitle = (record: TProjcte): string => {
  return record.name || record.id;
};
