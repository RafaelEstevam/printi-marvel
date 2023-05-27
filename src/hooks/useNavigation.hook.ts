import { useNavigate } from "react-router-dom";

const useNavigationHook = () => {
  const navigate = useNavigate();

  const handleNavigateTo = (to: string) => {
    navigate(to);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return {
    handleNavigateTo,
    handleLogout,
  };
};

export default useNavigationHook;
