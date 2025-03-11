import Slider from "react-slick";
import RightArrowIcon from "../../assets/icons/RightArrowIcon";

const categories = [
  { name: "App Stores", link: "/en/category/app-store", icon: "🔹" },
  {
    name: "Gaming Gift Cards",
    link: "/en/category/gaming-gift-cards",
    icon: "🎮",
  },
  { name: "Gaming Consoles", link: "/en/category/gaming-consoles", icon: "🕹️" },
  { name: "Mobile & Data", link: "/en/category/mobile-and-data", icon: "📶" },
  {
    name: "Marketplaces",
    link: "/en/category/market-place-gift-cards",
    icon: "🏪",
  },
  { name: "E-wallets", link: "/en/category/ewallets", icon: "💳" },
  { name: "Shopping", link: "/en/category/shopping", icon: "🛍️" },
  {
    name: "Leisure & Entertainment",
    link: "/en/category/leisure-and-entertainment-gift-cards",
    icon: "🎭",
  },
  {
    name: "Movies & Music",
    link: "/en/category/movies-and-music-platforms",
    icon: "🎵",
  },
  {
    name: "Spa, Wellness & Procedures",
    link: "/en/category/spa-welness-and-procedures-gift-cards",
    icon: "💆‍♂️",
  },
  { name: "Software", link: "/en/category/software", icon: "💻" },
  { name: "Other Digital Gift Cards", link: "/en/category/others", icon: "🛒" },
];

// Custom Arrow Components
const NextArrow = ({ onClick, currentSlide, slideCount }) => {
  if (currentSlide >= slideCount - 6) return null; // Hide arrow if at the end
  return (
    <button
      onClick={onClick}
      className="absolute right-[5px] top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full z-10 hover:bg-opacity-90"
    >
      <RightArrowIcon />
    </button>
  );
};

const PrevArrow = ({ onClick, currentSlide }) => {
  if (currentSlide === 0) return null; // Hide arrow if at the start
  return (
    <button
      onClick={onClick}
      className="absolute left-[5px] top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full z-10 hover:bg-opacity-90"
    >
      <RightArrowIcon className="rotate-180" />
    </button>
  );
};

const CategorySlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="bg-black-gray w-full">
      <div className="lg:max-w-[1440px] mx-auto relative y">
        <Slider {...settings} className="bg-dark-gray p-4 rounded-lg">
          {categories.map((category, index) => (
            <div key={index} className="!flex justify-center px-2">
              <div className="flex flex-col items-center justify-center bg-black p-4 rounded-lg w-full hover:bg-primary transition-colors duration-300 cursor-pointer">
                <span className="text-primary text-2xl mb-2">
                  {category.icon}
                </span>
                <span className="text-white text-sm font-semibold text-center line-clamp-1">
                  {category.name}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategorySlider;
