import axios from "axios";

const articleInstance = axios.create({
  baseURL: "http://localhost:3001/api/articles"
})

export const fetchAllArticles = async () => {
  const { data } = await articleInstance.get("/")
  return data
};