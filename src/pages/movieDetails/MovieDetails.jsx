import "./movieDetails.css";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import {motion} from 'framer-motion'

const MovieDetails = () => {
  const { id } = useParams();

  const fetchMovieDetails = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=364d90c4eafb84407135bc900f697f3d`
    );
    return response.data;
  };

  const { data: movieDetails, isSuccess } = useQuery({
    queryKey: ["movieDetails"],
    queryFn: fetchMovieDetails,
    cacheTime: 0,
  });

  return (
    <div>
      <Navbar />
      {isSuccess && (
        <div 
        className="details">
          <img
            src={`https://image.tmdb.org/t/p/original${movieDetails?.poster_path}`}
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
