import  { useState, useEffect, useCallback } from "react";
import { Zap, Clock } from "lucide-react";
import { useNavigate } from "react-router";
import DealCard from "./DealCard";

const deals = [
    {
        id: 1,
        name: "Men Slim Fit cotton shirt",
        category: "Apparel",
        image: "https://images.unsplash.com/photo-1602810319428-019690571b5b",
        originalPrice: 1999,
        finalPrice: 1499,
        rating: 4.8,
        tag: "Best Seller",
        url: "/products/f1a2s3h4i5o6n7p8r9d0",
    },
    {
        id: 2,
        name: "Wireless Headphones",
        category: "Electronics",
        image:
            "https://www.sony.co.in/image/6145c1d32e6ac8e63a46c912dc33c5bb",
        originalPrice: 3499,
        finalPrice: 2990,
        rating: 4.3,
        tag: "Limited Stock",
        url: "/products/a1b2c3d4e5f6g7h8i9j0",
    },
    {
        id: 3,
        name: "Running Sneakers",
        category: "Footwear",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        originalPrice: 4999,
        finalPrice: 3499,
        rating: 4.5,
        url: "/products/footwear5544",
    },
];

function DealCompo() {

    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState("05:59:59");
    const [cartCount] = useState(0);

    useEffect(() => {
        let seconds = 6 * 60 * 60 - 1;

        const interval = setInterval(() => {
            const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
            const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
            const s = String(seconds % 60).padStart(2, "0");

            setTimeLeft(`${h}:${m}:${s}`);
            seconds--;

            if (seconds < 0) clearInterval(interval);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleNavigate = useCallback(
        (url) => {
            navigate(url);
        },
        [navigate]
    );


    return (
        <div className="min-h-screen bg-slate-50 text-[#1E293B] font-sans">

            {/* HEADER */}
            <header className="bg-[#1E293B] text-white py-12 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="bg-[#4F46E5] text-xs uppercase tracking-widest px-3 py-1 rounded-full font-bold">
                        Exclusive Offers
                    </span>

                    <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-2">
                        Flash Sale is <span className="text-[#4F46E5]">LIVE</span>
                    </h1>

                    <p className="text-slate-400 text-lg mb-6">
                        Premium products at unbeatable prices. Limited time only.
                    </p>

                    <div className="flex items-center justify-center gap-2 text-[#4F46E5] font-mono text-2xl bg-white/5 w-fit mx-auto px-6 py-2 rounded-lg border border-white/10">
                        <Clock size={22} />
                        <span>Ending in: {timeLeft}</span>
                    </div>
                </div>
            </header>

            {/* GRID */}
            <main className="max-w-7xl mx-auto px-4 py-16">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-2xl font-bold">Handpicked Deals</h2>
                        <div className="h-1 w-12 bg-[#4F46E5] mt-2"></div>
                    </div>
                </div>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {deals.map((item) => (
                        <DealCard
                            key={item.id}
                            item={item}
                            onNavigate={handleNavigate}
                        />
                    ))}
                </div>
            </main>

            {/* TRUST */}
            <section className="bg-slate-100 py-12 border-t">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <Zap className="mx-auto text-[#4F46E5] mb-2" />
                        <h4 className="font-bold">Fast Delivery</h4>
                        <p className="text-sm text-slate-500">Ships in 24 hours</p>
                    </div>
                    <div>
                        <div className="text-[#4F46E5] mb-2 font-bold text-xl">✓</div>
                        <h4 className="font-bold">Authentic Products</h4>
                        <p className="text-sm text-slate-500">100% genuine items</p>
                    </div>
                    <div>
                        <div className="text-[#4F46E5] mb-2 font-bold text-xl">☎</div>
                        <h4 className="font-bold">24/7 Support</h4>
                        <p className="text-sm text-slate-500">We’re here to help</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DealCompo
