import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const TvShowDetails = () => {
  const { id } = useParams();

  const APIKEY = import.meta.env.VITE_API_KEY;

  const fetchTvShowDetails = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${APIKEY}`
    );
    return response.data;
  };

  const { data: tvShowDetails } = useQuery({
    queryKey: ["tvShowDetails"],
    queryFn: fetchTvShowDetails,
  });

  return (
    <div>
      <Navbar />
      <div className="details">
        <img
          src={`https://image.tmdb.org/t/p/original${tvShowDetails?.poster_path}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default TvShowDetails;
