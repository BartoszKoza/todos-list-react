import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const useQueryParameter = (paramName) => {
  const location = useLocation();
  const value = new URLSearchParams(location.search).get(paramName);
  return value || "";
};
