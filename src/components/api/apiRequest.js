import { apikey } from "./apiKey";
import axios from "axios";

export const apiRequest = axios.create({
  baseURL: `http://www.omdbapi.com/?i=tt3896198&apikey=${apikey}`,
});
