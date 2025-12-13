import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchproduct, setPriceRange } from "../reduxslices/ProductSlice";
import ProductCard from "./ProductCard";

import AOS from "aos";
import "aos/dist/aos.css";

function ProductsCompo() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const itemsPerPage = 12;

  const dispatch = useDispatch();
  const { items, status, error, search, price } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    dispatch(fetchproduct());
  }, [dispatch]);

  /* -------------------- PRICE FILTER -------------------- */
  const handlePriceFilter = useCallback(
    (e) => {
      const val = e.target.value;

      if (val === "all") {
        dispatch(setPriceRange([0, 1000000]));
      } else {
        const [min, max] = val.split("-");
        dispatch(setPriceRange([Number(min), Number(max)]));
      }

      setCurrentPage(1);
    },
    [dispatch]
  );

  /* -------------------- CATEGORY LIST (FROM DB) -------------------- */
  const categories = useMemo(() => {
    const set = new Set();
    items.forEach((p) => {
      p.category.forEach((c) => set.add(c));
    });
    return Array.from(set);
  }, [items]);

  /* -------------------- CATEGORY FILTER -------------------- */
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  /* -------------------- FILTERED PRODUCTS -------------------- */
  const filteredItems = useMemo(() => {
    const s = search.toLowerCase();

    return items.filter((p) => {
      const priceMatch = p.price >= price[0] && p.price <= price[1];
      const searchMatch =
        p.name.toLowerCase().includes(s) ||
        p.keywords.some((k) => k.toLowerCase().includes(s)) ||
        p.category.some((c) => c.toLowerCase().includes(s)) ||
        p.sellerName.toLowerCase().includes(s) ||
        p.description.toLowerCase().includes(s) ||
        p.id.toLowerCase().includes(s);

      const categoryMatch =
        selectedCategory === "all" ||
        p.category.includes(selectedCategory);

      return priceMatch && searchMatch && categoryMatch;
    });
  }, [items, search, price, selectedCategory]);

  /* -------------------- PAGINATION -------------------- */
  const currentItems = useMemo(() => {
    const last = currentPage * itemsPerPage;
    const first = last - itemsPerPage;
    return filteredItems.slice(first, last);
  }, [filteredItems, currentPage]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const nextPage = () =>
    currentPage < totalPages && setCurrentPage((p) => p + 1);

  const prevPage = () =>
    currentPage > 1 && setCurrentPage((p) => p - 1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 bg-slate-50 min-h-screen">
      <div className="bg-indigo-700 text-white rounded-lg shadow-xl mb-10 p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight">
              Explore Catalog
            </h2>
            <p className="mt-1 text-indigo-200 font-medium">
              Showing {filteredItems.length} products
            </p>
          </div>

          {/* FILTERS */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">

            {/* CATEGORY FILTER */}
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="rounded-lg bg-indigo-600 border-2 border-indigo-400 py-3 px-4 text-white font-semibold"
            >
              <option value="all">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            {/* PRICE FILTER */}
            <select
              onChange={handlePriceFilter}
              defaultValue="all"
              className="rounded-lg bg-indigo-600 border-2 border-indigo-400 py-3 px-4 text-white font-semibold"
            >
              <option value="all">Price: All</option>
              <option value="1-1000">₹1 - ₹1000</option>
              <option value="1001-5000">₹1001 - ₹5000</option>
              <option value="5001-10000">₹5001 - ₹10000</option>
              <option value="10001-20000">₹10001 - ₹20000</option>
              <option value="20001-50000">₹20001 - ₹50000</option>
              <option value="50001-100000">₹50001 - ₹100000</option>
              <option value="100001-1000000">₹100000+</option>
            </select>

          </div>
        </div>
      </div>

      {/* LOADING */}
      {status === "Loading" && (
        <div className="py-20 text-center">
          <div className="animate-spin h-14 w-14 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto"></div>
        </div>
      )}

      {/* ERROR */}
      {status === "failed" && (
        <div className="bg-red-100 text-red-700 p-6 rounded-lg">
          Error: {error}
        </div>
      )}

      {/* EMPTY */}
      {filteredItems.length === 0 && status !== "Loading" && (
        <p className="text-center text-xl font-bold">
          No Products Found
        </p>
      )}

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 gap-6 mt-8">
        {currentItems.map((p) => (
          <div key={p.id} data-aos="zoom-in">
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {filteredItems.length > itemsPerPage && (
        <div className="flex justify-center items-center gap-2 mt-12 pt-6 border-t border-gray-200 flex-wrap">

          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-5 py-2 text-sm font-semibold text-slate-700 bg-white border border-gray-300 rounded-full shadow-md hover:bg-slate-100 disabled:opacity-50 cursor-pointer"
          >
            ← Previous
          </button>

          <div className="flex gap-1.5">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 text-sm font-bold rounded-full transition cursor-pointer ${currentPage === i + 1
                    ? "bg-indigo-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-slate-600 border border-gray-300 hover:bg-indigo-50 hover:text-indigo-600"
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-5 py-2 text-sm font-semibold text-slate-700 bg-white border border-gray-300 rounded-full shadow-md hover:bg-slate-100 disabled:opacity-50 cursor-pointer"
          >
            Next →
          </button>

        </div>
      )}

    </div>
  );
}

export default ProductsCompo;
