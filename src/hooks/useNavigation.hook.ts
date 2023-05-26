import { useNavigate } from "react-router-dom";

const useNavigationHook = () => {
  const navigate = useNavigate();

  const handleNavigateTo = (to: string) => {
    navigate(to);
  };

  return {
    handleNavigateTo,
  };
};

export default useNavigationHook;
