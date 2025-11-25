import React, { useState } from "react";

function ProductCard({ item }) {
    const [showFull, setShowFull] = useState(false);

    const shortDesc =
        item.description?.length > 60
            ? item.description.slice(0, 60) + "..."
            : item.description;

    // Convert reviewStars to 5-star visual
    const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(item.reviewStars));

    // Color logic: bad = red, average = yellow, good = green
    const ratingColor =
        item.reviewStars >= 4
            ? "text-green-600"
            : item.reviewStars >= 2
                ? "text-yellow-500"
                : "text-red-600";

    return (
        <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <h1 className="text-xl font-semibold">{item.name}</h1>
            <p className="text-green-600 font-bold mt-1">₹{item.price}</p>

            <div className={`flex items-center gap-1 mt-2 ${ratingColor}`}>
                {stars.map((filled, i) => (
                    <span key={i}>
                        {filled ? "★" : "☆"}
                    </span>
                ))}
                <span className="text-sm text-gray-600 ml-2">
                    ({item.reviewStars})
                </span>
            </div>

            {/* CATEGORY TAGS */}
            <div className="flex flex-wrap gap-2 mt-2">
                {item.category?.map((cat, i) => (
                    <span
                        key={i}
                        className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                        {cat}
                    </span>
                ))}
            </div>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-600 mt-3">
                {showFull ? item.description : shortDesc}
            </p>

            <button
                onClick={() => setShowFull(!showFull)}
                className="text-blue-600 font-medium text-sm mt-2 hover:underline"
            >
                {showFull ? "Show Less" : "Show More"}
            </button>
        </div>
    );
}

export default ProductCard;
