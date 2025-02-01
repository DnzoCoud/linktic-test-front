import { Link } from "react-router";
import MainPopover from "./MainPopover";
import useActiveLink from "@/hooks/useActiveLink";
import { cn } from "@/lib/utils";

export interface SidebarItemProps {
  icon: React.ReactElement;
  label: string;
  to: string;
}

export default function SidebarItem({ icon, label, to }: SidebarItemProps) {
  const isActive = useActiveLink(to, false);
  return (
    <MainPopover label={label}>
      <li className="w-full flex items-center justify-center">
        <Link
          to={"/"}
          className={cn(
            isActive
              ? "bg-slate-800 text-white"
              : "bg-zinc-300 text-zinc-800 hover:bg-zinc-400 transition hover:text-zinc-900",
            "size-10   p-1 rounded-lg flex items-center justify-center "
          )}
        >
          {icon}
        </Link>
      </li>
    </MainPopover>
  );
}
