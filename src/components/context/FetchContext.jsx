import { createContext } from "react";
import axios from "axios";

const FetchContext = createContext();

export const FetchProvider = ({ children }) => {
  const fetchMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=364d90c4eafb84407135bc900f697f3d&page=1`
    );
    return response.data;
  };

  const fetchShows = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=364d90c4eafb84407135bc900f697f3d&language=en-US&page=1`
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
