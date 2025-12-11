import React, { memo, useMemo } from "react";

function StarRating({ rating }) {
    const stars = useMemo(() => {
        const result = [];
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) result.push("full");
            else if (rating >= i - 0.5) result.push("half");
            else result.push("empty");
        }
        return result;
    }, [rating]);

    return (
        <div className="flex items-center gap-0.5">
            {stars.map((t, i) => (
                <span key={i} className="text-amber-400 text-xl leading-none">
                    {/* Using Unicode Star symbols for better appearance */}
                    {t === "full" ? "★" : t === "half" ? "✭" : "✩"}
                </span>
            ))}
        </div>
    );
}

export default memo(StarRating);