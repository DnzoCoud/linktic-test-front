import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/hooks/useLogin";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { authLogin } = useLogin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await authLogin(loginData.email, loginData.password);
      navigate("/");
    } catch (error: any) {
      toast("Credenciales invalidas", {});
    }
  };

  return (
    <form
      className="h-full flex flex-col p-2 justify-center items-center gap-4 w-full"
      onSubmit={handleSubmit}
    >
      <h1 className="text-5xl font-bold">Inicio de sesion</h1>
      <Input
        type="email"
        placeholder="Email"
        className="w-full"
        value={loginData.email}
        onChange={(e) => {
          setLoginData((prev) => ({
            ...prev,
            email: e.target.value,
          }));
        }}
      />
      <Input
        type="password"
        placeholder="Contrasena"
        className="w-full"
        value={loginData.password}
        onChange={(e) => {
          setLoginData((prev) => ({
            ...prev,
            password: e.target.value,
          }));
        }}
      />
      <Button className="w-full" type="submit">
        Ingresar
      </Button>
    </form>
  );
}
