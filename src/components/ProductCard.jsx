import React, { memo, useMemo } from "react";
import StarRating from "./StarRating";
import AddToCartButton from "../../components/animata/button/AddtocartButton";
import ViewProductButton from "../../components/animata/button/ViewProductButton";

function ProductCard({ product }) {


    const rating = useMemo(
        () => Number(product.reviewStars) || 0,
        [product.reviewStars]
    );

    return (
        <div
            data-aos="fade-up"
            className="flex flex-col sm:flex-row bg-white  rounded-lg shadow-md p-4 sm:p-6 hover:shadow-xl cursor-pointer gap-4"
        >
            <div className="w-40 h-40 sm:w-48 sm:h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain"
                />
            </div>

            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl md:text-2xl font-bold">
                        {product.name}
                    </h3>
                    <p className="text-sm mt-2 line-clamp-3">
                        {product.description}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-between mt-4">
                    <div>
                        <div className="flex items-center">
                            <StarRating rating={rating} />
                            <span className="ml-2 text-sm font-semibold">
                                {rating.toFixed(1)}
                            </span>
                        </div>
                        <p className="text-3xl font-extrabold mt-1">
                            ₹{product.price}
                        </p>
                    </div>

                    <div className="flex gap-3 mt-3 sm:mt-0">
                        <ViewProductButton productId={product.id} />

                        <AddToCartButton product={product} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(ProductCard);
