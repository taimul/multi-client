const Header = () => {
  return (
    <header className="bg-black py-3 px-6 border border-primary rounded-full flex items-center justify-between max-w-[1440px] mx-auto">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <span className="text-black font-bold">Z</span>
        </div>
        <span className="text-white text-lg font-bold">ZEK ZONE</span>
      </div>

      {/* Category & Search */}
      <div className="flex items-center gap-4 flex-1 mx-6">
        <button className="flex items-center gap-2 bg-primary px-4 py-2 rounded-full text-white font-semibold hover:bg-green-600">
          <Icon />
          Category
        </button>
        <div className="flex items-center flex-1 bg-dark-gray px-4 py-2 rounded-full">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent outline-none text-white"
          />
          <FaSearch className="text-white" />
        </div>
      </div>

      {/* Right-side Icons */}
      <div className="flex items-center gap-4 text-white">
        <button className="flex items-center gap-1 bg-dark-gray px-3 py-2 rounded-full">
          <FaGlobe />
          EN
        </button>
        <button className="flex items-center gap-1 bg-dark-gray px-3 py-2 rounded-full">
          <MdOutlineAttachMoney />
          USD
        </button>
        <div className="flex items-center gap-4 bg-dark-gray px-3 py-2 rounded-full">
          <IoIosWallet />
          <span className="text-primary">650$</span>
        </div>

        <div className="p-2 bg-dark-gray rounded-full">
          <WishlistIcon fill="none" />
        </div>
        <div className="p-2 bg-dark-gray rounded-full">
          <CartIcon fill="none" />
        </div>
        <div className="p-2 bg-dark-gray rounded-full">
          <AvatarIcon fill="none" />
        </div>
      </div>
    </header>
  );
};

export default Header;
