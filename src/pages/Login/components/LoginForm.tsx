import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function LoginForm() {
  const [loginData, setLoginData] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <form
      className="h-full flex flex-col p-2 justify-center items-center gap-4 w-full"
      onSubmit={handleSubmit}
    >
      <h1 className="text-5xl font-bold">Inicio de sesion</h1>
      <Input type="email" placeholder="Email" className="w-full" />
      <Input type="password" placeholder="Contrasena" className="w-full" />
      <Button className="w-full" type="submit">
        Ingresar
      </Button>
    </form>
  );
}
