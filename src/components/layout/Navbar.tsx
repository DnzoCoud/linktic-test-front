import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className="w-full flex items-center justify-between h-16">
      <nav className="p-2 flex items-center border-2 w-full rounded-2xl">
        <ul className="flex items-center gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <li className="p-1 border rounded-2xl px-4">
              <Link to={"/companies"} className="size-full">
                Empresas
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
