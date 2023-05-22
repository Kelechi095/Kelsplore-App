import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { motion } from "framer-motion";

const TvShowDetails = () => {
  const { id } = useParams();

  const fetchTvShowDetails = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=364d90c4eafb84407135bc900f697f3d`
    );
    return response.data;
  };

  const { data: tvShowDetails, isSuccess } = useQuery({
    queryKey: ["tvShowDetails"],
    queryFn: fetchTvShowDetails,
    cacheTime: 0,
  });

  return (
    <div>
      <Navbar />
      {isSuccess && (
        <motion.div
          className="details"
          animate={{
            opacity: 2,
          }}
          initial={{
            opacity: 0.1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/original${tvShowDetails?.poster_path}`}
            alt=""
          />
        </motion.div>
      )}
    </div>
  );
};

export default TvShowDetails;
