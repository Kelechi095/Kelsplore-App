import { createContext } from "react";
import axios from "axios";

const FetchContext = createContext();

export const FetchProvider = ({ children }) => {

  const APIKEY = import.meta.env.VITE_API_KEY;

  const fetchMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}&page=1`
    );
    return response.data;
  };

  const fetchShows = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${APIKEY}&language=en-US&page=1`
    );
    return response.data;
  };



  return (
    <FetchContext.Provider
      value={{
        fetchMovies,
        fetchShows,
      }}
    >
      {children}
    </FetchContext.Provider>
  );
};

export default FetchContext;
