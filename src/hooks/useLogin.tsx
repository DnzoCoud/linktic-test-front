import apiInstance from "@/axios";
import { AuthDto } from "@/models/auth";
import { useAuthStore } from "@/stores/useAuthStore";
import { useState } from "react";

const login = async (email: string, password: string) => {
  const response = await apiInstance.post("/auth/login", {
    email,
    password,
  });
  return response.data;
};

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setAuth } = useAuthStore();

  const authLogin = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await login(email, password);
      console.log(response);
      localStorage.setItem("authToken", response.data.token);
      setAuth(response.data);
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, authLogin };
};
