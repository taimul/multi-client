import { Outlet } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import heroBg from "../assets/hero.png";
import lowerBg from "../assets/lowerBg.png";
import Footer from "../pages/Shared/Footer";
import Header from "../pages/Shared/Header";

const Main = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${heroBg}), url(${lowerBg})`,
        backgroundSize: "100% 50%, 100% 50%",
        backgroundPosition: "top, bottom",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
