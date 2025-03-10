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
  {
    id: 6,
    title: "Elden Realm",
    image: "https://picsum.photos/400/400?random=6",
  },
  {
    id: 7,
    title: "Ancient Dragon",
    image: "https://picsum.photos/400/400?random=7",
  },
];

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Text Content */}
      <div className="text-center px-4 mb-12">
        <h1 className="text-5xl lg:text-5xl font-bold mb-6">
          Seamless Access to Digital Essentials
        </h1>
        <p className="text-base text-gray-300 max-w-3xl mx-auto">
          Discover exclusive digital gaming products, from in-game currency to
          premium content—instantly delivered to fuel your next adventure!
        </p>
      </div>

      {/* Cards Container */}
      <div className="relative flex justify-center items-center h-[400px] w-full">
        {cards.map((card, index) => {
          // Calculate spread positions
          const midIndex = (cards.length - 1) / 2;
          const positionOffset = (index - midIndex) * 110; // Adjust for center alignment
          const rotationAngle = (index - midIndex) * 8; // Tilt cards outward

          return (
            <div
              key={card.id}
              className="absolute transition-all duration-500 ease-in-out cursor-pointer"
              style={{
                transform: `
                  translateX(${positionOffset}px) 
                  rotate(${rotationAngle}deg)
                  translateY(${hoveredIndex === index ? "-30px" : "10px"})
                  scale(${hoveredIndex === index ? 1.15 : 1})
                `,
                zIndex: hoveredIndex === index ? 10 : index,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-36 h-52 lg:w-48 lg:h-64 lg:w-56 lg:h-72">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-lg shadow-2xl border-2 border-white/10"
                />
                {/* Title Overlay */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-3 bg-black/80 text-center transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="text-sm lg:text-base font-semibold">
                    {card.title}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
