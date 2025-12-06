import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const useReplaceQueryParameter = () => {
  const history = useHistory();
  const location = useLocation();

  const replaceQueryParameter = ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);

    if (value === undefined || value.trim() === "") {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return replaceQueryParameter;
};
