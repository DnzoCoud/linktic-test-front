import { useLocation } from "react-router";

const useActiveLink = (path: string, exact: boolean = false) => {
  const location = useLocation();

  if (exact) {
    return location.pathname === path;
  }
  return location.pathname.startsWith(path);
};

export default useActiveLink;
