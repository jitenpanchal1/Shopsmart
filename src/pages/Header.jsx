import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { ShoppingCart, Search, User, Menu, X } from "lucide-react";
import { Logout } from "../reduxslices/user";
import { setSearch } from "../reduxslices/ProductSlice";

export default function Header() {
  const { isauth, userdetail } = useSelector((state) => state.auth);
  const cartitem = useSelector((state) => state.cart.item)
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const handleLogout = () => {
    dispatch(Logout());
    navigate("/")
    setOpen(false);
  };

  const handleSearchChange = (e) => {
    setValue(e.target.value);
    dispatch(setSearch(e.target.value));
    navigate('/products');
  }

  return (
    <header className="w-full sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">

        <div
          onClick={() => navigate('/')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-200">
            SS
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-indigo-600 bg-clip-text text-transparent tracking-tight">
            ShopSmart
          </span>
        </div>

        {showMobileSearch && (
          <div className="sm:hidden absolute left-4 right-4 top-20">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                value={value}
                onChange={handleSearchChange}
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 shadow-md"
                autoFocus
              />
              <button
                onClick={() => setShowMobileSearch(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        )}

        <nav className="hidden lg:flex gap-8 text-sm font-medium">
          <Link
            to="/"
            className="text-slate-700 hover:text-indigo-600 transition-colors duration-200 relative py-2 group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300" />
          </Link>

          <Link
            to="/products"
            className="text-slate-700 hover:text-indigo-600 transition-colors duration-200 relative py-2 group"
          >
            Products
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300" />
          </Link>

          <Link
            to="/categories"
            className="text-slate-700 hover:text-indigo-600 transition-colors duration-200 relative py-2 group"
          >
            Categories
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300" />
          </Link>

          <Link
            to="/deals"
            className="flex items-center  rounded-lg 
             text-[#134686] font-semibold 
             animate-pulse"
          >
            Deals
          </Link>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">

          <div className="hidden sm:block relative flex-1 max-w-xs lg:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              onChange={handleSearchChange}
              value={value}
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
            />
          </div>

          {isauth ? (
            <div className="hidden sm:flex items-center gap-3 border border-slate-200 rounded-2xl px-3 py-1.5 bg-slate-50 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-500 flex items-center justify-center text-white shadow-sm">
                <User size={14} />
              </div>
              <span className="text-sm text-slate-800 font-medium max-w-[100px] truncate">
                {userdetail?.username}
              </span>
              <button
                onClick={handleLogout}
                className="text-xs cursor-pointer px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors duration-200 font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="hidden cursor-pointer sm:block px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Login
            </button>
          )}

          <button
            className="relative p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 group shadow-sm"
            onClick={() => navigate("/cart")}
          >
            <ShoppingCart className="w-5 h-5 text-slate-700 group-hover:text-indigo-600 transition-colors" />
            <span className="absolute -top-1 -right-1 bg-violet-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold shadow-sm">
              {cartitem.length}
            </span>
          </button>

          {/* Mobile Search Toggle */}
          <button
            className="sm:hidden p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
            onClick={() => setShowMobileSearch(true)}
          >
            <Search size={18} className="text-slate-700"
              onChange={handleSearchChange}
              value={value}
            />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={18} className="text-slate-700" />
            ) : (
              <Menu size={18} className="text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-md px-5 py-4 space-y-1">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center py-3 px-3 rounded-lg hover:bg-slate-50 text-slate-800 font-medium transition-colors"
          >
            Home
          </Link>

          <Link
            to="/products"
            onClick={() => setOpen(false)}
            className="flex items-center py-3 px-3 rounded-lg hover:bg-slate-50 text-slate-800 font-medium transition-colors"
          >
            Products
          </Link>

          <Link
            to="/categories"
            onClick={() => setOpen(false)}
            className="flex items-center py-3 px-3 rounded-lg hover:bg-slate-50 text-slate-800 font-medium transition-colors"
          >
            Categories
          </Link>

          <Link
            to="/deals"
            onClick={() => setOpen(false)}
            className="flex items-center py-3 px-3 rounded-lg hover:bg-slate-50 text-[#134686] font-semibold transition-colors animate-pulse"
          >
            Deals
          </Link>

          {/* Mobile Auth */}
          {isauth ? (
            <div className="pt-3 border-t border-slate-200">
              <div className="flex items-center gap-3 px-3 py-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-500 flex items-center justify-center text-white">
                  <User size={14} />
                </div>
                <span className="text-sm text-slate-800 font-medium flex-1">
                  {userdetail?.username}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="w-full cursor-pointer py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                navigate('/login');
                setOpen(false);
              }}
              className="w-full cursor-pointer mt-2 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-500 transition-all"
            >
              Login
            </button>
          )}
        </div>
      )}
    </header>
  );
}
