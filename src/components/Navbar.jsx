
import {
  Search,
  Heart,
  User,
  ShoppingBag,
  Menu,
} from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white px-3 py-3 shadow-sm sm:px-5 md:px-6">

      {/* Main Navbar */}
      <div className="flex items-center justify-between gap-3">

        {/* Logo */}
        <div className="flex shrink-0 items-center gap-2">
          <ShoppingBag size={27} className="text-blue-600 sm:size-8" />
          <h1 className="text-xl font-bold text-blue-700 sm:text-2xl">
            Flipkart
          </h1>
        </div>

        {/* Desktop Search */}
        <div className="hidden max-w-2xl flex-1 items-center rounded-full bg-gray-100 px-4 py-3 md:flex">
          <Search size={20} className="shrink-0 text-gray-500" />
          <input
            type="text"
            placeholder="Search for Products, Brand and More"
            className="w-full bg-transparent px-3 text-sm outline-none"
          />
        </div>

        {/* Vendor Button */}
        <button className="hidden shrink-0 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 lg:block">
          Become a Vendor
        </button>

        {/* Icons */}
        <div className="flex shrink-0 items-center gap-3 text-gray-700 sm:gap-4">
          <Search className="cursor-pointer md:hidden" size={20} />
          <Heart className="hidden cursor-pointer hover:text-blue-600 sm:block" size={21} />
          <User className="cursor-pointer hover:text-blue-600" size={21} />
          <ShoppingBag className="cursor-pointer hover:text-blue-600" size={21} />
          <Menu className="cursor-pointer lg:hidden" size={23} />
        </div>

      </div>

      {/* Mobile Search */}
      <div className="mt-3 flex items-center rounded-full bg-gray-100 px-4 py-2.5 md:hidden">
        <Search size={19} className="shrink-0 text-gray-500" />
        <input
          type="text"
          placeholder="Search for Products, Brand and More"
          className="w-full bg-transparent px-3 text-xs outline-none sm:text-sm"
        />
      </div>

    </nav>
  );
}

export default Navbar;
