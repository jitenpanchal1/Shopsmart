import React, { memo, useMemo } from "react";
import { useNavigate } from "react-router";
import StarRating from "./StarRating";

function ProductCard({ product }) {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/products/${product.id}`);
    };

    const rating = useMemo(() => Number(product.reviewStars) || 0, [product.reviewStars]);

    return (
        <div
            data-aos="zoom-in"
            onClick={handleViewDetails}
            className="group flex flex-col overflow-hidden rounded-xl bg-white border border-gray-100 shadow-lg transition-all duration-300 hover:shadow-2xl cursor-pointer"
        >
            {/* IMAGE */}
            <div className="w-full h-52 sm:h-56 md:h-60 lg:h-64 overflow-hidden bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col flex-1 p-5 space-y-3">
                <h3 className="text-xl font-bold text-gray-900 line-clamp-2 transition duration-300 group-hover:text-indigo-600">
                    {product.name}
                </h3>

                {/* Rating and Price */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <StarRating rating={rating} />
                        <span className="ml-2 text-sm font-semibold text-gray-600">
                            {rating.toFixed(1)}
                        </span>
                    </div>
                    <p className="text-2xl font-extrabold text-indigo-700">₹{product.price}</p>
                </div>

                <p className="text-sm text-gray-500 line-clamp-3 flex-grow border-t border-gray-100 pt-3">
                    {product.description}
                </p>

                {/* Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleViewDetails();
                    }}
                    className="mt-auto w-full rounded-lg bg-indigo-600 py-2.5 text-base font-semibold text-white shadow-md shadow-indigo-300 transition duration-300 hover:bg-indigo-700 transform hover:scale-[1.02] active:scale-100 focus:outline-none focus:ring-4 focus:ring-indigo-300 cursor-pointer"
                >
                    View Details
                </button>
            </div>
        </div>
    );
}

export default memo(ProductCard);
