import { useMutation, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../keys";
import { login, refreshToken, signup, verify } from "../routes/auth";
import { LoginFormType, SignupFormType } from "@/types/api";

export const useLogin = () => {
  return useMutation({
    mutationFn: (payload: LoginFormType) => login(payload),
  });
};

export const useSignup = () => {
  return useMutation({
    mutationFn: (payload: SignupFormType) => signup(payload),
  });
};
export const useRereshToken = () => {
  return useMutation({
    mutationFn: () => refreshToken(),
  });
};

export const useVerify = () => {
  return useQuery({
    queryFn: verify,
    queryKey: [queryKeys.verify],
    retry: 1,
    retryDelay: 1000,
  });
};
