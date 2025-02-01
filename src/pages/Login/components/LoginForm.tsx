import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function LoginForm() {
  return (
    <form
      className=" h-[60%] flex flex-col p-2 justify-center items-center w-[60%] gap-4 border border-slate-800 rounded-2xl shadow-xl"
    >
      <h1 className="text-5xl font-bold">Inicio de sesion</h1>
      <Input type="email" placeholder="Email" className="w-3/5" />
      <Input type="password" placeholder="Contrasena" className="w-3/5" />
      <Button>Ingresar</Button>
    </form>
  );
}
