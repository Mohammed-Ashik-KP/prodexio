import { axios } from "@/lib/axios";

export const createTask = async (payload) => {
  const response = await axios.post("/task", payload);
  return response.data;
};
export const getTasks = async () => {
  const response = await axios.get("/tasks");
  return response.data;
};
