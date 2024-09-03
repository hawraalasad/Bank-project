const setToken = (token) => {
  localStorage.setItem("token", token);
};

const getToken = () => {
  const token = localStorage.getItem("token");
};

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else return false;
};

const deletToken = () => {
  localStorage.removeItem("token");
};

export { setToken, getToken, deletToken, checkToken };
