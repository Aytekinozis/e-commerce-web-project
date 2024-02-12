import axios from "axios";

export const createInstance = () => {
  return axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
  });
};

export let API = createInstance();

export const renewAPI = () => {
  API = createInstance();
};
