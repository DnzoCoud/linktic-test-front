import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-stretch">
      <Sidebar />
      <main className="size-full px-4 overflow-auto">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}
