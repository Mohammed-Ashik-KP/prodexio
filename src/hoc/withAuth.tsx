import { useVerify } from "@/api/hooks/auth";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/globalStore/authStore";

const WithAuthHOC: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading, error, data } = useVerify();

  const { setUser } = useAuthStore();
  const router = useRouter();
  useEffect(() => {
    if (error) {
      router.push("/login");
    }
    if (data) {
      setUser(data.user);
    }
  }, [error, data, setUser, router]);

  if (isLoading) {
    return <>Loading</>;
  }
  if (data) {
    return <>{children}</>;
  }
};

export default WithAuthHOC;
