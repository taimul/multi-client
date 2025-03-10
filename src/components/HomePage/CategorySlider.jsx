import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

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

// Custom arrow components
const NextArrow = (props) => (
  <button
    {...props}
    className="slick-arrow slick-next !right-[-25px] before:!content-none"
    aria-label="Next"
  >
    →
  </button>
);

const PrevArrow = (props) => (
  <button
    {...props}
    className="slick-arrow slick-prev !left-[-25px] before:!content-none"
    aria-label="Previous"
  >
    ←
  </button>
);

const CategorySlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
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
    <div className="w-full mt-6 px-6 relative">
      <Slider {...settings} className="bg-dark-gray p-4 rounded-lg">
        {categories.map((category, index) => (
          <div key={index} className="!flex justify-center px-2">
            <div
              //   to={category.link}
              className="flex flex-col items-center justify-center bg-black p-4 rounded-lg w-full hover:bg-primary transition-colors duration-300 cursor-pointer"
            >
              <span className="text-primary text-2xl mb-2">
                {category.icon}
              </span>
              <span className="text-white text-sm font-semibold text-center">
                {category.name}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;
