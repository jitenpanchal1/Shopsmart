// components/AddToCartButton.jsx
import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from ".././../../src/reduxslices/AddtoCart";

function AddToCartButton({ product }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartItems = useSelector((state) => state.cart.item);
    const isLogin = useSelector((state) => state.auth.isauth);

    const [isAdding, setIsAdding] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false); // kept for parity

    const checkall = cartItems.some((p) => p.id === product.id);

    const addtocart = (e) => {
        e.stopPropagation();

        if (!isLogin) {
            navigate("/login");
            return;
        }

        setIsAdding(true);
        dispatch(addToCart(product));

        setTimeout(() => {
            setIsAdding(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 2000);
        }, 500);
    };

    return (
        <button
            onClick={checkall || isAdding ? (e) => e.stopPropagation() : addtocart}
            disabled={checkall || isAdding}
            className={`w-full sm:w-auto px-6 py-2.5 text-base font-semibold text-white rounded-lg transition duration-300 cursor-pointer
        ${checkall ? "bg-green-600 hover:bg-green-700" : "bg-orange-500 hover:bg-orange-600"}
      `}
        >
            {isAdding ? "Adding..." : checkall ? "✓ In Cart" : "Add to Cart"}
        </button>
    );
}

export default memo(AddToCartButton);
