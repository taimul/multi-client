import ProductCard from "../Ui/ProductCard";

const productCards = [
  {
    id: 1,
    title: "Cyber Warrior",
    image: "https://picsum.photos/400/400?random=1",
    price: "$100",
  },
  {
    id: 2,
    title: "Frozen Lands",
    image: "https://picsum.photos/400/400?random=2",
    price: "$100",
  },
  {
    id: 3,
    title: "Future City",
    image: "https://picsum.photos/400/400?random=3",
    price: "$100",
  },
  {
    id: 4,
    title: "Dark Fantasy",
    image: "https://picsum.photos/400/400?random=4",
    price: "$100",
  },
  {
    id: 5,
    title: "Legendary Quest",
    image: "https://picsum.photos/400/400?random=5",
    price: "$100",
  },
  {
    id: 6,
    title: "Elden Realm",
    image: "https://picsum.photos/400/400?random=6",
    price: "$100",
  },
  {
    id: 7,
    title: "Ancient Dragon",
    image: "https://picsum.photos/400/400?random=7",
    price: "$100",
  },
  {
    id: 8,
    title: "Ancient Dragon",
    image: "https://picsum.photos/400/400?random=8",
    price: "$10",
  },
];

const PopularProducts = () => {
  return (
    <div className="w-full py-6">
      <div className="lg:max-w-[1440px] mx-auto">
        <h2 className="text-white text-2xl font-bold text-center mb-4">
          Popular Products
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Discover our most loved products that customers can’t get enough of.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {productCards.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              price={product.price}
              title={product.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
