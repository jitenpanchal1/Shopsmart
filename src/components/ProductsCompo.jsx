import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchproduct, setPriceRange } from "../reduxslices/ProductSlice";
// Import the new list item component
// import ProductListItem from "./ProductListItem"; 
import ProductCard from "./ProductCard";

import AOS from "aos";
import "aos/dist/aos.css";

function ProductsCompo() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const dispatch = useDispatch();
  const { items, status, error, search, price } = useSelector(
    (state) => state.products
  );

  // INIT AOS
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

  const filteredItems = useMemo(() => {
    const s = search.toLowerCase();
    return items.filter(
      (p) =>
        p.price >= price[0] &&
        p.price <= price[1] &&
        (p.name.toLowerCase().includes(s) ||
          p.keywords.some((k) => k.toLowerCase().includes(s)) ||
          p.category.some((c) => c.toLowerCase().includes(s)) ||
          p.sellerName.toLowerCase().includes(s) ||
          p.description.toLowerCase().includes(s) ||
          p.id.toLowerCase().includes(s))
    );
  }, [items, search, price]);

  const currentItems = useMemo(() => {
    const last = currentPage * itemsPerPage;
    const first = last - itemsPerPage;
    return filteredItems.slice(first, last);
  }, [filteredItems, currentPage]);

  const totalPages = useMemo(
    () => Math.ceil(filteredItems.length / itemsPerPage),
    [filteredItems]
  );

  const nextPage = useCallback(
    () => currentPage < totalPages && setCurrentPage((p) => p + 1),
    [currentPage, totalPages]
  );

  const prevPage = useCallback(
    () => currentPage > 1 && setCurrentPage((p) => p - 1),
    [currentPage]
  );

  const goToPage = useCallback((page) => setCurrentPage(page), []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 bg-slate-50 min-h-screen">

      {/* Header */}
      <div className="bg-indigo-700 text-white rounded-lg shadow-xl mb-10 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight">
              Explore Catalog
            </h2>
            <p className="mt-1 text-indigo-200 font-medium">
              Showing {currentItems.length} of {filteredItems.length} products
            </p>
          </div>

          {/* Price Filter */}
          <div className="relative w-full sm:w-64">
            <select
              id="price-filter"
              onChange={handlePriceFilter}
              defaultValue="all"
              className="appearance-none block w-full rounded-lg border-2 border-indigo-400 bg-indigo-600 py-3 pl-4 pr-10 text-base shadow-lg text-white font-semibold focus:ring-2 focus:ring-white"
            >
              <option value="all">Price: All Ranges</option>
              <option value="1-1000">₹1 - ₹1000</option>
              <option value="1001-5000">₹1001 - ₹5000</option>
              <option value="5001-10000">₹5001 - ₹10000</option>
              <option value="10001-20000">₹10001 - ₹20000</option>
              <option value="20001-50000">₹20001 - ₹50000</option>
              <option value="50001-100000">₹50001 - ₹100000</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Loading */}
      {status === "Loading" && (
        <div className="py-20 text-center bg-white rounded-xl shadow-md border border-gray-100">
          <div className="animate-spin h-14 w-14 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto"></div>
          <p className="mt-6 text-indigo-700 text-xl font-semibold">
            Fetching products...
          </p>
        </div>
      )}

      {/* Error */}
      {status === "failed" && (
        <div className="py-10 bg-red-50 border border-red-400 text-red-700 px-6 rounded-lg shadow-md">
          <p className="font-extrabold text-xl">Connection Error</p>
          <p className="text-sm mt-1">Could not load products. Error: {error}</p>
        </div>
      )}

      {/* Empty */}
      {filteredItems.length === 0 && status !== "Loading" && (
        <div className="text-center py-20 bg-white rounded-xl shadow-md border border-gray-200">
          <p className="text-gray-700 text-2xl font-bold">No Products Found</p>
          <p className="text-gray-500 mt-2">
            Please adjust your search or price filters.
          </p>
        </div>
      )}

      {/* Product Grid - Single Column List View (Consistent on all devices) */}
      <div
        className="
          grid 
          grid-cols-1 
          gap-6
          mt-8
        "
      >
        {currentItems.map((p) => (
          <div key={p.id} data-aos="zoom-in">
            {/* Using the detailed list item component */}
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
                onClick={() => goToPage(i + 1)}
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