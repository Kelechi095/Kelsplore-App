import "./homePage.css";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";


const HomePage = () => {
  return (
    <main className="home-page">
      <Navbar />
      <section>
        <h2>
        <Typewriter
            words={[
              "MINIMALIST WEBSITE",
              "EXPLORE TRENDING MOVIES",
              "CHECK OUT MY FAVORITE BOOKS",
              "REACH OUT ME!",
            ]}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            //  onLoopDone={handleDone}
            //  onType={handleType}
          />
        </h2>

        <Link to="/about">
          <button>Explore</button>
        </Link>
      </section>
    </main>
  );
};

export default HomePage;
