import { axios } from "@/lib/axios";
import { LoginFormType, SignupFormType } from "@/types/api";

export const login = async (payload: LoginFormType) => {
  const response = await axios.post("/login", payload);
  return response.data;
};

export const signup = async (payload: SignupFormType) => {
  const response = await axios.post("/signup", payload);
  return response.data;
};

export const refreshToken = async () => {
  const response = await axios.post("/refresh-token");
  return response.data;
};

export const verify = async () => {
  const response = await axios.get("/verify");
  return response.data;
};
