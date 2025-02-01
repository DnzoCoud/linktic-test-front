import HeaderPage from "@/components/layout/HeaderPage";
import { IoHomeOutline } from "react-icons/io5";

export default function HomePage() {
  return (
    <div>
      <HeaderPage
        title="Inicio"
        description="Sistema de inventario y control de productos."
        icon={<IoHomeOutline className="text-white" />}
      />
    </div>
  );
}
