import { Outlet } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Footer from "../pages/Shared/Footer";
import Header from "../pages/Shared/Header";
const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
