import { useMutation, useQuery } from "@tanstack/react-query";
import { createTask, getTasks } from "../routes/task";
import { TaskType } from "@/types";

export const useCreateTask = () => {
  return useMutation({
    mutationFn: (payload: TaskType) => createTask(payload),
  });
};
export const useGetTasks = () => {
  return useQuery({
    queryFn: () => getTasks(),
    queryKey: [],
  });
};
