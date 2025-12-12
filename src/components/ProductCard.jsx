import React, { memo, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import StarRating from "./StarRating";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../reduxslices/AddtoCart";

function ProductCard({ product }) {
    const navigate = useNavigate();
    const dispatsh = useDispatch();
    const allcart = useSelector((state) => state.cart.item);

    // 🔥 Get login state
    const isLogin = useSelector((state) => state.auth.isauth);

    const [isAdding, setIsAdding] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const checkall = allcart.some((p) => p.id === product.id);

    const handleViewDetails = (e) => {
        if (e.target.tagName === "BUTTON") return;
        navigate(`/products/${product.id}`);
    };

    const addtocart = (e) => {
        e.stopPropagation();

        // 🔥 If user NOT logged in → send to login
        if (!isLogin) {
            navigate("/login");
            return;
        }

        setIsAdding(true);

        dispatsh(addToCart(product));

        setTimeout(() => {
            setIsAdding(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 2000);
        }, 500);
    };

    const rating = useMemo(
        () => Number(product.reviewStars) || 0,
        [product.reviewStars]
    );

    return (
        <div
            data-aos="fade-up"
            onClick={handleViewDetails}
            className="flex flex-col sm:flex-row items-start bg-white border border-gray-200 rounded-lg shadow-md p-4 sm:p-6 transition duration-300 hover:shadow-xl cursor-pointer gap-4"
        >
            <div className="w-40 h-40 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center mx-auto sm:mx-0 sm:w-48 sm:h-48">
                <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="flex-1 space-y-3 flex flex-col justify-between h-full w-full">
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 line-clamp-2 transition duration-300 hover:text-indigo-600">
                        {product.name}
                    </h3>
                    <p className="text-sm text-black mt-2 line-clamp-3">
                        {product.description}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-4 border-t border-gray-100 pt-3 sm:pt-0 sm:border-t-0 sm:gap-4">

                    <div className="flex flex-col space-y-1 mb-4 sm:mb-0">
                        <div className="flex items-center">
                            <StarRating rating={rating} />
                            <span className="ml-2 text-sm font-semibold text-gray-600">
                                {rating.toFixed(1)}
                            </span>
                            <span className="ml-2 text-sm text-gray-500">
                                ({product.reviewsCount || 0} Ratings)
                            </span>
                        </div>

                        <div className="flex items-baseline mt-1">
                            <p className="text-3xl font-extrabold text-indigo-700">
                                ₹{product.price}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/products/${product.id}`);
                            }}
                            className="w-full sm:w-auto px-6 py-2.5 text-base font-semibold text-white rounded-lg bg-indigo-600 shadow-md shadow-indigo-300 transition duration-300 hover:bg-indigo-700 transform hover:scale-[1.02] active:scale-100 focus:outline-none focus:ring-4 focus:ring-indigo-300 cursor-pointer"
                        >
                            View Details
                        </button>

                        <div className="relative">
                            <button
                                onClick={
                                    checkall || isAdding
                                        ? (e) => e.stopPropagation()
                                        : addtocart
                                }
                                disabled={checkall || isAdding}
                                className={`w-full sm:w-auto px-6 py-2.5 text-base font-semibold text-white rounded-lg transition duration-300 cursor-pointer
                                 ${checkall
                                        ? "bg-green-600 hover:bg-green-700"
                                        : "bg-orange-500 hover:bg-orange-600"
                                    }`
                                }
                            >
                                {isAdding
                                    ? "Adding..."
                                    : checkall
                                        ? "✓ In Cart"
                                        : "Add to Cart"}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(ProductCard);
