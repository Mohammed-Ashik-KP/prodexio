import { axios } from "@/lib/axios";
import { LoginFormType, SignupFormType } from "@/types/api";

export const login = async (payload: LoginFormType) => {
  try {
    const response = await axios.post("/login", payload);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const signup = async (payload: SignupFormType) => {
  try {
    const response = await axios.post("/signup", payload);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const refreshToken = async () => {
  try {
    const response = await axios.post("/refresh-token");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const verify = async () => {
  try {
    const response = await axios.get("/verify");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
