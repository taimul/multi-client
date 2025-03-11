const SubCategoriesCard = ({ image, title }) => {
  return (
    <div className="bg-black-gray p-4 rounded-lg w-full text-center cursor-pointer group">
      <img
        src={image}
        alt={title}
        className="rounded-lg mb-2 w-full h-32 object-cover scale-100 group-hover:scale-105 transition-all duration-300"
      />
      <span className="text-white text-sm font-semibold ">{title}</span>
    </div>
  );
};

export default SubCategoriesCard;
