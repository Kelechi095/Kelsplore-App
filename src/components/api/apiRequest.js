import axios from "axios";

export const apiRequest = axios.create({
  baseURL: `https://www.omdbapi.com/?i=tt3896198&apikey=fe03cbb2&s=/`,
});
