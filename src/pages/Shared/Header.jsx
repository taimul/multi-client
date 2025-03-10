import AvatarIcon from "../../assets/icons/AvatarIcon";
import BarIcon from "../../assets/icons/BarIcon";
import CartIcon from "../../assets/icons/CartIcon";
import CurrencyIcon from "../../assets/icons/CurrencyIcon";
import GlobeIcon from "../../assets/icons/GlobeIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import WalletIcon from "../../assets/icons/WalletIcon";
import Button from "../../components/Ui/Button";
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
        <div className="border border-border p-1 rounded-full">
          <Button className="!pr-20 ">
            <BarIcon fill="none" />
            Category
          </Button>
        </div>
        <div className="flex items-center flex-1 bg-dark-gray px-4 py-2 rounded-full border-border border">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent outline-none text-white "
          />
          <SearchIcon fill="none" />
        </div>
      </div>

      {/* Right-side Icons */}
      <div className="flex items-center gap-4 text-white">
        <Button btnType="outline">
          <GlobeIcon fill="none" size={24} />
          EN
        </Button>
        <Button btnType="outline">
          <CurrencyIcon />
          USD
        </Button>
        <Button btnType="outline">
          <WalletIcon fill="none" />
          <span className="text-primary">650$</span>
        </Button>

        <Button btnType="outline" className="md:!px-2 px-2">
          <WishlistIcon fill="none" />
        </Button>
        <Button btnType="outline" className="md:!px-2 px-2">
          <CartIcon fill="none" />
        </Button>
        <Button btnType="outline" className="md:!px-2 px-2">
          <AvatarIcon fill="none" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
