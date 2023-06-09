import "./homePage.css";
import Navbar from "../../components/navbar/Navbar";
import { Link, useLocation } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { useEffect } from "react";

const HomePage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
              "REACH OUT TO ME!",
              "MINIMALIST WEBSITE",
            ]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            //  onLoopDone={handleDone}
            //  onType={handleType}
          />
        </h2>

      </section>
    </main>
  );
};

export default HomePage;
