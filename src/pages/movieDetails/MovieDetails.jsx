import "./movieDetails.css";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();

  const APIKEY = import.meta.env.VITE_API_KEY;

  const fetchMovieDetails = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}`
    );
    return response.data;
  };

  const { data: movieDetails } = useQuery({
    queryKey: ["movieDetails"],
    queryFn: fetchMovieDetails,
  });

  console.log(movieDetails);

  return (
    <div>
      <Navbar />
      <div className="details">
        <img
          src={`https://image.tmdb.org/t/p/original${movieDetails?.poster_path}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default MovieDetails;
