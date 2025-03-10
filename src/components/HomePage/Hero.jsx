import { useState } from "react";
import heroBg from "../../assets/hero.png";

const cards = [
  {
    id: 1,
    title: "Cyber Warrior",
    image: "https://picsum.photos/400/400?random=1",
  },
  {
    id: 2,
    title: "Frozen Lands",
    image: "https://picsum.photos/400/400?random=2",
  },
  {
    id: 3,
    title: "Future City",
    image: "https://picsum.photos/400/400?random=3",
  },
  {
    id: 4,
    title: "Dark Fantasy",
    image: "https://picsum.photos/400/400?random=4",
  },
  {
    id: 5,
    title: "Legendary Quest",
    image: "https://picsum.photos/400/400?random=5",
  },
];

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white py-16"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Text Content */}
      <div className="text-center px-4 mb-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Seamless Access to Digital Essentials
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Discover exclusive digital gaming products, from in-game currency to
          premium content—instantly delivered to fuel your next adventure!
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex justify-center items-center w-full overflow-x-auto px-4 py-8">
        <div className="flex relative h-96">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="relative transition-all duration-300 ease-out cursor-pointer mx-[-60px] hover:mx-[-20px]"
              style={{
                zIndex: hoveredIndex === index ? 30 : 20 - index,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`w-48 h-64 md:w-60 md:h-72 lg:w-72 lg:h-80 shadow-2xl rounded-xl border-2 border-white/20 transition-transform duration-300 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                {/* Title Overlay */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent rounded-b-xl transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="text-lg font-bold text-center">
                    {card.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
