const ProductCard = ({ id, image, title, price }) => {
  return (
    <div
      key={id}
      className="bg-black p-4 rounded-lg cursor-pointer hover:bg-primary transition-all duration-300"
    >
      <img
        src={image}
        alt={title}
        className="rounded-lg mb-2 w-full h-40 object-cover"
      />
      <h3 className="text-white text-sm font-semibold">{title}</h3>
      <p className="text-green-400 font-bold mt-2">{price}</p>
    </div>
  );
};

export default ProductCard;
