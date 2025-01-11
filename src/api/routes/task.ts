import { axios } from "@/lib/axios";
import { TaskType } from "@/types";

export const createTask = async (payload: TaskType) => {
  try {
    const response = await axios.post("/task", payload);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getTasks = async () => {
  try {
    const response = await axios.get("/tasks");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
