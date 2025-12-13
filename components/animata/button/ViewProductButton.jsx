import { memo } from "react";
import { useNavigate } from "react-router";

function ViewProductButton({ productId }) {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.stopPropagation();
        navigate(`/products/${productId}`);
    };

    return (
        <button
            onClick={handleClick}
            className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg cursor-pointer"
        >
            View Details
        </button>
    );
}

export default memo(ViewProductButton);
