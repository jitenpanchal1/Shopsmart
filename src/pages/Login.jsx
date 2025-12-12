import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../reduxslices/user";
import { useNavigate } from "react-router";

export default function LLogin() {
    const { isauth, userdetail } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [detail, setdetail] = useState({
        username: "",
        password: "",
        check: false,
    });
    const [error, seterror] = useState(null);
    const [loading, setloading] = useState(false);

    const handchange = (e) => {
        const { name, type, checked, value } = e.target;
        setdetail({
            ...detail,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const adduser = async (e) => {
        e.preventDefault();
        setloading(true);
        seterror(null);
        if (!detail.username || !detail.password) {
            seterror("All fields are required");
            setloading(false);
            return;
        }
        if (detail.check === false) {
            seterror("Please agree to the terms and conditions");
            setloading(false);
            return;
        }
        try {
            const call = await fetch(
                "https://691c6d5e3aaeed735c90cb31.mockapi.io/userlogin",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(detail),
                }
            );

            if (!call.ok) {
                seterror("Invalid inputs");
                setloading(false);
                return;
            }

            const read = await call.json();
            setloading(false);
            dispatch(Login(read));
            navigate("/products")
        } catch (err) {
            seterror("Network error");
            setloading(false);
        }
    };
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-indigo-100 px-4">
            <section className="w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-xl px-10 py-6">

                <header className="flex flex-col items-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-500
                            flex items-center justify-center shadow-md text-white text-xl font-bold">
                        SS
                    </div>
                    <h1 className="text-2xl font-bold text-slate-800 mt-3">Welcome Back</h1>
                    <p className="text-slate-500 text-sm mt-1">
                        Login to continue shopping with ShopSmart
                    </p>
                </header>

                <form onSubmit={adduser} className="flex flex-col gap-3">

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={detail.username}
                            onChange={handchange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300
                           text-sm text-slate-800 placeholder-slate-400 bg-white
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 
                           focus:border-indigo-500 transition-all duration-200 shadow-sm"
                        />
                    </div>

                    <div className="relative">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={detail.password}
                            onChange={handchange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300
                           text-sm text-slate-800 placeholder-slate-400 bg-white
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 
                           focus:border-indigo-500 transition-all duration-200 shadow-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full cursor-pointer mt-2 px-6 py-3 rounded-xl bg-indigo-600 
                       text-white text-sm font-semibold shadow-md 
                       hover:bg-indigo-500 hover:shadow-lg active:scale-95 
                       transition-all duration-200"
                    >
                        {loading ? "..." : "Login"}
                    </button>
                    <div className="flex items-center mt-4">
                        <input
                            type="checkbox"
                            name="check"
                            checked={detail.check}
                            onChange={handchange}
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded"
                        />
                        <label htmlFor="check" className="ml-2 block text-sm text-slate-700">
                            I agree to the terms and conditions
                        </label>
                    </div>
                </form>

                <footer className="mt-6 text-center">
                    <div className="mt-6 p-4 rounded-xl bg-yellow-50 border-l-4 border-yellow-500 shadow-md ">
                        <h3 className="text-sm font-bold text-yellow-800 mb-2 flex items-center gap-0">
                            ⚠ Important Notice
                        </h3>

                        <ul className="text-xs text-yellow-900 leading-relaxed list-disc pl-5 space-y-1">
                            <li>This login is powered by a mock API service.</li>
                            <li>No real authentication or permanent storage exists.</li>
                            <li>All data is temporary and resets on refresh.</li>
                            <li>Do NOT use real credentials.</li>
                        </ul>
                    </div>

                    <div className="mt-6 flex items-center gap-3">
                        <div className="flex-1 h-px bg-slate-300"></div>
                        <span className="text-xs text-slate-400">ShopSmart</span>
                        <div className="flex-1 h-px bg-slate-300"></div>
                    </div>
                </footer>
                {error && (
                    <div
                        className="mt-4 px-4 py-2 bg-red-100 text-red-700 text-sm rounded-lg    border border-red-200"
                        role="alert"
                    >
                        {error}
                    </div>
                )}

            </section>

        </main>


    )
}

