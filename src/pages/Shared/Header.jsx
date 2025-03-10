import { useState } from "react";
import AvatarIcon from "../../assets/icons/AvatarIcon";
import BarIcon from "../../assets/icons/BarIcon";
import CartIcon from "../../assets/icons/CartIcon";
import GlobeIcon from "../../assets/icons/GlobeIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import WishlistIcon from "../../assets/icons/WishlistIcon";
import Button from "../../components/Ui/Button";
import Dropdown from "../../components/Ui/Dropdown";

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState({
    label: "EN",
  });
  const [selectedCurrency, setSelectedCurrency] = useState({
    label: "USD",
    icon: "$",
  });

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
        {/* Category Dropdown */}
        <Dropdown
          label="Category"
          options={[
            { label: "Electronics", value: "electronics" },
            { label: "Fashion", value: "fashion" },
            { label: "Home & Living", value: "home" },
            { label: "Gaming", value: "gaming" },
          ]}
          icon={<BarIcon fill="none" />}
          onSelect={(option) => console.log("Selected Category:", option)}
          className="!bg-primary hover:!bg-opacity-90 hover:!bg-primary md:!pr-20"
        />

        {/* Search Bar */}
        <div className="flex items-center flex-1 bg-dark-gray px-4 py-2 rounded-full border border-border">
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
        {/* Language Dropdown with Flags */}
        <Dropdown
          label={
            <span className="flex items-center gap-2">
              {selectedLanguage.icon} {selectedLanguage.label}
            </span>
          }
          options={[
            { label: "EN" },
            // { label: "ES", value: "es", icon: "🇪🇸" },
            // { label: "FR", value: "fr", icon: "🇫🇷" },
            // { label: "DE", value: "de", icon: "🇩🇪" },
          ]}
          icon={<GlobeIcon fill="none" />}
          onSelect={(option) => setSelectedLanguage(option)}
        />

        {/* Currency Dropdown with Symbols */}
        <Dropdown
          label={
            <span className="flex items-center gap-2">
              {selectedCurrency.icon} {selectedCurrency.label}
            </span>
          }
          options={[
            { label: "USD", value: "usd", icon: "$" },
            { label: "EUR", value: "eur", icon: "€" },
            { label: "AED", value: "aed", icon: "د.إ" },
          ]}
          // icon={<CurrencyIcon />}
          onSelect={(option) => setSelectedCurrency(option)}
        />

        {/* Wishlist, Cart, Avatar */}
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
