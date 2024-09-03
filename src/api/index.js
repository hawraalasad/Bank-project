import axios from "axios";
import { getToken } from "./storage";

const instance = axios.create({
  baseURL: "https://react-bank-project.eapi.joincoded.com/",
});

instance.interceptors.request.use((config) => {
  const token = getToken();
  // if (token) {
  //   config.
  // };
});
export default instance;
