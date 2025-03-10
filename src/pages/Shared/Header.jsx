import AvatarIcon from "../../assets/icons/AvatarIcon";
import BarIcon from "../../assets/icons/BarIcon";
import CartIcon from "../../assets/icons/CartIcon";
import CurrencyIcon from "../../assets/icons/CurrencyIcon";
import GlobeIcon from "../../assets/icons/GlobeIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import WalletIcon from "../../assets/icons/WalletIcon";
import WishlistIcon from "./../../assets/icons/WishlistIcon";

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
          <BarIcon fill="none" />
          Category
        </button>
        <div className="flex items-center flex-1 bg-dark-gray px-4 py-2 rounded-full">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent outline-none text-white"
          />
          <SearchIcon fill="none" />
        </div>
      </div>

      {/* Right-side Icons */}
      <div className="flex items-center gap-4 text-white">
        <button className="flex items-center gap-[6px] bg-dark-gray px-3 py-2 rounded-full">
          <GlobeIcon fill="none" size={24} />
          EN
        </button>
        <button className="flex items-center gap-[6px] bg-dark-gray px-3 py-2 rounded-full">
          <CurrencyIcon />
          USD
        </button>
        <div className="flex items-center gap-[6px] bg-dark-gray px-3 py-2 rounded-full">
          <WalletIcon fill="none" />
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
