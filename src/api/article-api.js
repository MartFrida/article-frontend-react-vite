import axios from "axios";

const articleInstance = axios.create({

  baseURL: import.meta.env.VITE_BASE_URL
})

export const fetchAllArticles = async () => {
  const { data } = await articleInstance.get("/")
  return data
};