import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../reduxslices/AddtoCart';
import AddtocartButton from '../../components/animata/button/AddtocartButton';

function DetailP() {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`https://691c6d5e3aaeed735c90cb31.mockapi.io/products/${id}`)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [id]);

    const handleAddToCart = () => {
        dispatch(addToCart(data));
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-6 sm:py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="mb-6">
                    <nav className="flex text-sm text-gray-500">
                        <a href="/" className="hover:text-indigo-600">Home</a>
                        <span className="mx-2">/</span>
                        <a href="/products" className="hover:text-indigo-600">Products</a>
                        <span className="mx-2">/</span>
                        <span className="text-gray-800 font-medium">{data.name}</span>
                    </nav>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                        {/* Product Image */}
                        <div className="flex flex-col">
                            <div className="bg-gray-50 rounded-xl p-6 flex items-center justify-center">
                                <img
                                    src={data.image}
                                    alt={data.name}
                                    className="w-full max-w-md h-auto object-contain rounded-lg"
                                />
                            </div>

                            {/* Additional Images (if available) */}
                            <div className="flex gap-3 mt-4 overflow-x-auto">
                                {[1, 2, 3].map((num) => (
                                    <div key={num} className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg border-2 border-transparent hover:border-indigo-500 cursor-pointer p-2">
                                        <img
                                            src={data.image}
                                            alt={`View ${num}`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="space-y-6">
                            {/* Product Header */}
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                                        {data.productCompany}
                                    </span>
                                    {data.category && data.category.length > 0 && (
                                        <span className="text-xs font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded">
                                            {data.category[0]}
                                        </span>
                                    )}
                                </div>

                                <h1 className="text-3xl font-bold text-gray-900 mb-3">
                                    {data.name}
                                </h1>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg
                                                key={star}
                                                className={`w-5 h-5 ${star <= Math.round(data.reviewStars) ? 'text-yellow-400' : 'text-gray-300'}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-600">
                                        {data.reviewStars} • 1,234 reviews
                                    </span>
                                </div>
                            </div>

                            {/* Price Section */}
                            <div className="border-t border-b py-6">
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="text-4xl font-bold text-gray-900">
                                        ₹{data.price.toLocaleString()}
                                    </span>
                                    {data.basePrice && data.basePrice > data.price && (
                                        <>
                                            <span className="text-xl text-gray-500 line-through">
                                                ₹{data.basePrice.toLocaleString()}
                                            </span>
                                            <span className="text-sm font-medium bg-green-100 text-green-800 px-2 py-1 rounded">
                                                Save ₹{(data.basePrice - data.price).toLocaleString()}
                                            </span>
                                        </>
                                    )}
                                </div>
                                <p className="text-green-600 font-medium">In stock • Free delivery</p>
                            </div>

                            {/* Seller Info */}
                            <div className="bg-gray-50 rounded-xl p-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600">Sold by</p>
                                        <p className="font-medium text-gray-900">{data.sellerName}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-600">Delivery by</p>
                                        <p className="font-medium text-gray-900">Tomorrow, 10 AM</p>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {data.description}
                                </p>
                            </div>

                            {/* Specifications */}
                            <div className="space-y-3">
                                <h3 className="text-lg font-semibold text-gray-900">Specifications</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <p className="text-sm text-gray-600">Brand</p>
                                        <p className="font-medium">{data.productCompany}</p>
                                    </div>
                                    {data.category && (
                                        <div>
                                            <p className="text-sm text-gray-600">Category</p>
                                            <p className="font-medium">{data.category.join(', ')}</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <AddtocartButton product={data} />
                        </div>
                    </div>
                </div>

                {/* Additional Info Section */}
                <div className="border-t bg-gray-50 p-6">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Product Information</h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-1">Authentic Product</h4>
                                <p className="text-sm text-gray-600">100% genuine with warranty</p>
                            </div>

                            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-1">Easy Returns</h4>
                                <p className="text-sm text-gray-600">30-day return policy</p>
                            </div>

                            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-1">Fast Delivery</h4>
                                <p className="text-sm text-gray-600">Next day delivery available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailP;