import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incQty, decQty, removeCart, clearCard } from "../reduxslices/AddtoCart";
import { Link } from "react-router";

function CartsCompo() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.item);

    // Calculate total amount
    const totalAmount = cart.reduce((sum, item) => sum + item.total, 0);

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-gray-800 border-b pb-4">Your Cart</h1>

                {cart.length === 0 && (
                    <div className="text-center py-20 text-gray-500 font-semibold">
                        Your cart is empty.

                        <p> <Link
                            to="/products"
                            className="inline-block mt-4 px-5 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
                        >
                            browse product
                        </Link>
                        </p>
                    </div>
                )}

                {/* CART LIST */}
                <div className="space-y-6 mt-6">
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-4 border-b pb-4"
                        >
                            {/* IMAGE */}
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 object-contain rounded-lg bg-gray-50"
                            />

                            {/* DETAILS */}
                            <div className="flex-1">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    {item.name}
                                </h2>
                                <p className="text-sm text-gray-500 line-clamp-2">
                                    {item.description}
                                </p>

                                {/* PRICE */}
                                <p className="mt-2 text-indigo-600 font-bold text-xl">
                                    ₹{item.price}
                                </p>
                            </div>

                            {/* QTY CONTROLS */}
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => dispatch(decQty(item.id))}
                                    className="px-3 py-1 bg-gray-200 rounded text-lg font-bold hover:bg-gray-300"
                                >
                                    -
                                </button>

                                <span className="font-bold text-gray-800">{item.qty}</span>

                                <button
                                    onClick={() => dispatch(incQty(item.id))}
                                    className="px-3 py-1 bg-gray-200 rounded text-lg font-bold hover:bg-gray-300"
                                >
                                    +
                                </button>
                            </div>

                            {/* REMOVE BUTTON */}
                            <button
                                onClick={() => dispatch(removeCart(item.id))}
                                className="text-red-600 font-bold hover:underline"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                {/* FOOTER WITH TOTAL */}
                {cart.length > 0 && (
                    <div className="mt-8 flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                                Total Amount: ₹{totalAmount}
                            </h2>
                        </div>

                        <button
                            onClick={() => dispatch(clearCard())}
                            className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
                        >
                            Clear Cart
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CartsCompo;
