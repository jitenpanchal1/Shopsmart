import React, { memo, useMemo } from "react";
import { Star } from "lucide-react";

const DealCard = memo(function DealCard({ item, onNavigate }) {
    const discount = useMemo(() => {
        return Math.round(
            ((item.originalPrice - item.finalPrice) / item.originalPrice) * 100
        );
    }, [item.originalPrice, item.finalPrice]);

    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
            {/* IMAGE */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {item.tag && (
                    <span className="absolute top-4 left-4 bg-[#1E293B] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                        {item.tag}
                    </span>
                )}
            </div>

            {/* CONTENT */}
            <div className="p-6">
                <p className="text-xs font-bold text-[#4F46E5] uppercase mb-1">
                    {item.category}
                </p>

                <h3 className="font-bold text-xl mb-2 group-hover:text-[#4F46E5] transition">
                    {item.name}
                </h3>

                <div className="flex items-center gap-1 mb-4 text-orange-400">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-bold text-slate-600">
                        {item.rating}
                    </span>
                </div>

                <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-2xl font-black">
                        ₹{item.finalPrice}
                    </span>
                    <span className="line-through text-slate-400 text-sm">
                        ₹{item.originalPrice}
                    </span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                        {discount}% OFF
                    </span>
                </div>

                <button
                    onClick={() => onNavigate(item.url)}
                    className="w-full bg-[#4F46E5] text-white py-3 rounded-xl font-bold hover:bg-[#3d36c2] active:scale-95 transition shadow-lg shadow-indigo-200 cursor-pointer"
                >
                    View Details
                </button>
            </div>
        </div>
    );
});

export default DealCard;
