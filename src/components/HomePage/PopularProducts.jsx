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
];

const PopularProducts = () => {
  return (
    <div className="w-full px-6 py-6">
      <h2 className="text-white text-2xl font-bold text-center mb-4">
        Popular Products
      </h2>
      <p className="text-gray-400 text-center mb-6">
        Discover our most loved products that customers can’t get enough of.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productCards.map((product) => (
          <div
            key={product.id}
            className="bg-black p-4 rounded-lg cursor-pointer hover:bg-primary transition-all duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="rounded-lg mb-2 w-full h-40 object-cover"
            />
            <h3 className="text-white text-sm font-semibold">
              {product.title}
            </h3>
            <p className="text-green-400 font-bold mt-2">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
