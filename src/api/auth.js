import instance from ".";
import { setToken } from "./storage";

const login = async (userInfo) => {
  try {
    const { data } = await instance.post(
      "/mini-project/api/auth/login",
      userInfo
    );
    setToken(data.token); // <--- This
    return data;
  } catch (error) {
    console.log(error);
  }
};

const register = async (userInfo) => {
  try {
    //This is for seding the request with files
    const formData = new FormData();
    for (const key in userInfo) {
      formData.append(key, userInfo[key]);
    }
    // END
    const { data } = await instance.post(
      "/mini-project/api/auth/register",
      formData
    );
    setToken(data.token); // <--- This
    return data;
  } catch (error) {
    console.log(error);
  }
};

const logout = () => {
  localStorage.removeItem("token");
};

const me = async () => {
  const { data } = await instance.get("/mini-project/api/auth/me");
  return data;
};

const transactions = async () => {
  const { data } = await instance.get("/mini-project/api/transactions/my");
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/mini-project/api/auth/users");
  return data;
};

export { login, register, me, getAllUsers, logout, transactions };
