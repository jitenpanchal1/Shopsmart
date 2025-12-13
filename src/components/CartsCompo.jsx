import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incQty, decQty, removeCart, clearCard } from "../reduxslices/AddtoCart";
import { Link } from "react-router";
import ViewProductButton from "../../components/animata/button/ViewProductButton";

function CartsCompo() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.item);

    const totalAmount = cart.reduce((sum, item) => sum + item.total, 0);
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

    return (
        <div className="min-h-screen bg-gray-100 p-2 sm:p-4 md:p-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 md:gap-6">
                {/* CART ITEMS SECTION */}
                <div className="lg:w-2/3 w-full">
                    <div className="bg-white shadow-md sm:shadow-lg rounded-lg p-4 sm:p-6">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 border-b pb-3 sm:pb-4">
                            Your Cart <span className="text-sm sm:text-base font-normal text-gray-500 ml-2">({totalItems} items)</span>
                        </h1>

                        {cart.length === 0 && (
                            <div className="text-center py-12 sm:py-20 text-gray-500">
                                <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <p className="text-lg font-semibold mb-2">Your cart is empty</p>
                                <p className="text-gray-600 mb-6">Add items to get started</p>
                                <Link
                                    to="/products"
                                    className="inline-block px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                                >
                                    Browse Products
                                </Link>
                            </div>
                        )}

                        {/* CART LIST */}
                        <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col xs:flex-row items-start xs:items-center gap-3 sm:gap-4 border-b pb-4 sm:pb-6"
                                >
                                    {/* IMAGE - Responsive sizing */}
                                    <div className="w-full xs:w-20 sm:w-24 md:w-28 h-40 xs:h-20 sm:h-24 md:h-28 flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-contain rounded-lg bg-gray-50 p-1"
                                        />
                                    </div>

                                    {/* DETAILS - Responsive text */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-2">
                                            <h2 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-1">
                                                {item.name}
                                            </h2>

                                        </div>

                                        <p className="text-xs sm:text-sm text-gray-500 line-clamp-2 mt-1">
                                            {item.description}
                                        </p>

                                        {/* PRICE - Responsive sizing */}
                                        <p className="mt-2 text-indigo-600 font-bold text-lg sm:text-xl">
                                            ₹{item.price}
                                        </p>

                                        {/* QTY CONTROLS - Stack on extra small, row on larger */}
                                        <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-3 mt-3">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm text-gray-600 xs:hidden">Quantity:</span>
                                                <div className="flex items-center gap-1 sm:gap-2">
                                                    <button
                                                        onClick={() => dispatch(decQty(item.id))}
                                                        className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-gray-200 rounded text-lg font-bold hover:bg-gray-300 transition-colors"
                                                    >
                                                        <span className="mb-0.5">−</span>
                                                    </button>

                                                    <span className="font-bold text-gray-800 min-w-[24px] text-center text-sm sm:text-base">
                                                        {item.qty}
                                                    </span>

                                                    <button
                                                        onClick={() => dispatch(incQty(item.id))}
                                                        className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-gray-200 rounded text-lg font-bold hover:bg-gray-300 transition-colors"
                                                    >
                                                        <span className="mb-0.5">+</span>
                                                    </button>

                                                </div>
                                                <ViewProductButton productId={item.id} />

                                            </div>
                                            <div>
                                            </div>

                                            {/* SUBTOTAL on mobile */}
                                            <div className="xs:hidden flex items-center justify-between mt-2">
                                                <span className="text-sm text-gray-600">Subtotal:</span>
                                                <span className="font-bold text-gray-800">₹{item.total}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* SUBTOTAL & REMOVE - Hidden on xs, shown on larger */}
                                    <div className="hidden xs:flex flex-col items-end gap-2 self-start">
                                        <p className="text-base sm:text-lg font-bold text-gray-800 whitespace-nowrap">
                                            ₹{item.total}
                                        </p>
                                        <button
                                            onClick={() => dispatch(removeCart(item.id))}
                                            className="flex items-center gap-1 text-red-600 font-medium hover:text-red-700 text-sm"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                            Remove
                                        </button>
                                    </div>

                                    {/* REMOVE button for xs screens */}
                                    <button
                                        onClick={() => dispatch(removeCart(item.id))}
                                        className="xs:hidden w-full py-2 bg-red-50 text-red-600 font-medium rounded-lg hover:bg-red-100 transition-colors text-sm flex items-center justify-center gap-1"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        Remove Item
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* PRODUCT SUMMARY SECTION */}
                {cart.length > 0 && (
                    <div className="lg:w-1/3 w-full">
                        <div className="bg-white shadow-md sm:shadow-lg rounded-lg p-4 sm:p-6 lg:sticky lg:top-20">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 border-b pb-3 sm:pb-4 mb-4 sm:mb-6">
                                Order Summary
                            </h2>

                            <div className="space-y-3 sm:space-y-4">
                                {/* ITEM COUNT */}
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 text-sm sm:text-base">Items ({totalItems})</span>
                                    <span className="font-medium text-sm sm:text-base">₹{totalAmount}</span>
                                </div>

                                {/* DISCOUNT */}
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 text-sm sm:text-base">Discount</span>
                                    <span className="text-green-600 font-medium text-sm sm:text-base">-₹0</span>
                                </div>

                                {/* DELIVERY */}
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 text-sm sm:text-base">Delivery</span>
                                    <span className="font-medium text-sm sm:text-base">₹0</span>
                                </div>

                                {/* DIVIDER */}
                                <div className="border-t pt-3 sm:pt-4 mt-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-800 font-bold text-lg sm:text-xl">Total Amount</span>
                                        <span className="text-indigo-600 font-bold text-xl sm:text-2xl">₹{totalAmount}</span>
                                    </div>
                                </div>

                                {/* CHECKOUT BUTTON - Full width on mobile, proper padding */}
                                <button className="w-full mt-4 sm:mt-6 px-4 py-3 sm:px-6 sm:py-3 bg-indigo-600 text-white font-medium sm:font-semibold rounded-lg hover:bg-indigo-700 transition-colors text-sm sm:text-base">
                                    Proceed to Checkout
                                </button>

                                {/* CONTINUE SHOPPING */}
                                <Link
                                    to="/products"
                                    className="block text-center mt-3 sm:mt-4 px-4 py-2.5 sm:px-6 sm:py-2 border border-indigo-600 text-indigo-600 font-medium sm:font-semibold rounded-lg hover:bg-indigo-50 transition-colors text-sm sm:text-base"
                                >
                                    Continue Shopping
                                </Link>

                                {/* CLEAR CART BUTTON */}
                                <button
                                    onClick={() => dispatch(clearCard())}
                                    className="w-full mt-3 px-4 py-2.5 sm:px-6 sm:py-2 bg-red-50 text-red-600 font-medium sm:font-semibold rounded-lg hover:bg-red-100 transition-colors border border-red-200 text-sm sm:text-base flex items-center justify-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    Clear Cart
                                </button>
                            </div>

                            {/* SAFE SHOPPING MESSAGE */}
                            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t">
                                <div className="flex items-center justify-center gap-2 text-green-600 mb-1">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-sm text-gray-600 font-medium">
                                        Safe & Secure Checkout
                                    </p>
                                </div>
                                <p className="text-xs text-gray-400 text-center mt-1">
                                    Your payment information is encrypted and secure
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CartsCompo;