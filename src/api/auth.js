import instance from ".";
import { setToken } from "./storage";

const login = async (userInfo) => {
  try {
    const { data } = await instance.post(
      "/mini-project/api/auth/login",
      userInfo
    );
    setToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const register = async (userInfo) => {
  try {
    const formData = new FormData();
    for (const key in userInfo) {
      formData.append(key, userInfo[key]);
    }
    const { data } = await instance.post(
      "/mini-project/api/auth/register",
      formData
    );
    setToken(data.token);
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

const deposit = async (amount) => {
  try {
    const { data } = await instance.put(
      "/mini-project/api/transactions/deposit",
      { amount }
    );
    return data;
  } catch (error) {
    console.error("Deposit error:", error);
    throw new Error("Deposit failed");
  }
};

const transfer = async (amount, username) => {
  try {
    const { data } = await instance.put(
      `/mini-project/api/transactions/transfer/${username}`,
      { amount }
    );
    return data;
  } catch (error) {
    console.error("Transfer error:", error);
    throw new Error("Transfer failed");
  }
};

const withdraw = async (amount) => {
  try {
    const { data } = await instance.put(
      "/mini-project/api/transactions/withdraw",
      { amount }
    );
    return data;
  } catch (error) {
    console.error("Withdraw  error:", error);
    throw new Error("Withdraw  failed");
  }
};
const edit = async (image) => {
  try {
    const formData = new FormData();
    for (const key in image) {
      formData.append(key, image[key]);
    }
    const { data } = await instance.put(
      "/mini-project/api/auth/profile",
      formData
    );
    setToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export {
  login,
  register,
  me,
  getAllUsers,
  logout,
  deposit,
  transfer,
  transactions,
  withdraw,
  edit,
};
