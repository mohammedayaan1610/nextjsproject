export interface Todo {
  id: string;
  name: string;
  createdAt?: Date | string;
  status: "Pending" | "Completed";
}


