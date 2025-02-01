import SidebarItem, { SidebarItemProps } from "./SidebarItem";
import { GoPackageDependents } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { RiBuilding2Line } from "react-icons/ri";
import { AiOutlineProduct } from "react-icons/ai";

const menus: SidebarItemProps[] = [
  {
    icon: <IoHomeOutline />,
    label: "Inicio",
    to: "",
  },
  {
    icon: <RiBuilding2Line />,
    label: "Empresas",
    to: "/companies",
  },
  {
    icon: <AiOutlineProduct />,
    label: "Productos",
    to: "/products",
  },
];

export default function Sidebar() {
  return (
    <aside className="h-full w-14 bg-gray-200 flex flex-col justify-between">
      <div className="w-full flex items-center justify-center size-12 bg-black">
        <GoPackageDependents className="text-2xl text-white" />
      </div>
      <nav className="w-full">
        <ul className="overflow-hidden space-y-6">
          {menus.map((menu, i) => (
            <SidebarItem
              key={i}
              icon={menu.icon}
              label={menu.label}
              to={menu.to}
            />
          ))}
        </ul>
      </nav>
      <div></div>
    </aside>
  );
}
