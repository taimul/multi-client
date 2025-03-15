import lowerBg from "../../assets/lowerBg.png";
import CategorySlider from "../../components/HomePage/CategorySlider";
import Hero from "../../components/HomePage/Hero";
import PopularProducts from "../../components/HomePage/PopularProducts";
import SubCategories from "../../components/HomePage/SubCategories";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategorySlider />
      <div
        className="relative min-h-[90svh] flex flex-col items-center justify-center bg-fill bg-center text-white"
        style={{ backgroundImage: `url(${lowerBg})` }}
      >
        <SubCategories />
        <PopularProducts />
      </div>
    </div>
  );
};

export default Home;
