export const getAccess = () => {
  const access = JSON.parse(localStorage.getItem("access"));
  return access;
};
