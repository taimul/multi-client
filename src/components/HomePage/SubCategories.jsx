import Slider from "react-slick";
import RightArrowIcon from "../../assets/icons/RightArrowIcon";
import SubCategoriesCard from "../Ui/SubCategoriesCard";

const subCategories = [
  {
    id: 1,
    title: "Swarovski Gift Cards",
    image: "https://picsum.photos/300/200?random=1",
  },
  {
    id: 2,
    title: "Essentially Natural",
    image: "https://picsum.photos/300/200?random=2",
  },
  {
    id: 3,
    title: "Mary Ann’s",
    image: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 4,
    title: "Pentatonic",
    image: "https://picsum.photos/300/200?random=4",
  },
  { id: 5, title: "Flokk", image: "https://picsum.photos/300/200?random=5" },
  {
    id: 6,
    title: "Happi Earth",
    image: "https://picsum.photos/300/200?random=6",
  },
  {
    id: 7,
    title: "Brand Canada",
    image: "https://picsum.photos/300/200?random=7",
  },
  {
    id: 8,
    title: "Game Stop",
    image: "https://picsum.photos/300/200?random=8",
  },
  {
    id: 9,
    title: "Steam Gift Card",
    image: "https://picsum.photos/300/200?random=9",
  },
];

// Custom Arrow Components
const NextArrow = ({ onClick, currentSlide, slideCount }) => {
  if (currentSlide >= slideCount - 2) return null; // Hide arrow if at the end
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

const SubCategories = () => {
  const settings = {
    dots: false,
    className: "center",
    infinite: false,
    speed: 500,
    centerPadding: "60px",
    slidesToShow: 2, // Number of columns per row
    slidesToScroll: 1,
    rows: 2, // Multi-row display
    slidesPerRow: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesPerRow: 2, rows: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesPerRow: 2, rows: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesPerRow: 1, rows: 2 },
      },
    ],
  };

  return (
    <div className="w-full py-6">
      <div className="lg:max-w-[1440px] mx-auto relative">
        <h2 className="text-white text-2xl font-bold text-center mb-4">
          Browse Our Sub-Categories
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Explore our wide range of categories, from gaming essentials to
          accessories and more.
        </p>
        <Slider {...settings} className=" p-4 rounded-lg">
          {subCategories.map((category) => (
            <div key={category.id} className="px-2 mb-4">
              <SubCategoriesCard
                image={category.image}
                title={category.title}
                key={category.id}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SubCategories;
