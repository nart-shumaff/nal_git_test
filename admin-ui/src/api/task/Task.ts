import { User } from "../user/User";
import { Projcte } from "../projcte/Projcte";

export type Task = {
  assignedTo?: User | null;
  createdAt: Date;
  estimation: number | null;
  id: string;
  project?: Array<Projcte>;
  startDate: Date | null;
  status?: "New" | "Pending" | "Ongoing" | "Done";
  title: string | null;
  updatedAt: Date;
};
