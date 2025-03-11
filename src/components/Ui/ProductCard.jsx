import PlusBagIcon from "../../assets/icons/PlusBagIcon";
import WishlistIcon from "../../assets/icons/WishlistIcon";
import Button from "./Button";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="relative bg-black-gray p-4 rounded-lg cursor-pointer  transition-all duration-300 border border-gray-700">
      {/* Wishlist Icon (Top-Right) */}

      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="rounded-lg mb-3 w-full h-40 object-cover"
      />

      {/* "In Stock" Badge */}
      <div className="flex gap-2 justify-between items-center">
        <span className="  bg-secondary text-primary text-xs font-semibold px-2 py-1 rounded-md">
          In Stock
        </span>
        <button className="  bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition">
          <WishlistIcon fill="none" />
        </button>
      </div>

      {/* Product Info */}
      <h3 className="text-white text-sm font-semibold mb-2">{title}</h3>

      {/* Price & Cart Button */}
      <div className="flex items-center justify-between">
        <p className="text-primary font-bold">{price}</p>
        <Button
          isCustom={true}
          className="bg-primary p-3 rounded-md hover:bg-opacity-90 transition"
        >
          <PlusBagIcon />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
