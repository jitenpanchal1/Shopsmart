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
    });
    const [error, seterror] = useState(null);
    const [loading, setloading] = useState(false);

    const handchange = (e) => {
        setdetail({ ...detail, [e.target.name]: e.target.value });
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
            navigate("/")
        } catch (err) {
            seterror("Network error");
            setloading(false);
        }
    };
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-indigo-100 px-4">

            {/* Login Section */}
            <section className="w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-xl p-8">

                {/* Header */}
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

                {/* Login Form */}
                <form onSubmit={adduser} className="flex flex-col gap-4" aria-label="Login Form">

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
                        className="w-full mt-2 px-6 py-3 rounded-xl bg-indigo-600 
                       text-white text-sm font-semibold shadow-md 
                       hover:bg-indigo-500 hover:shadow-lg active:scale-95 
                       transition-all duration-200"
                    >
                        {loading ? "..." : "Login"}
                    </button>
                </form>
                {/* Footer Links */}
                <footer className="mt-6 text-center">
                    <p className="text-xs text-slate-500 leading-relaxed">
                        This login system uses a simple backend powered by a free mock API service.
                        <br />
                        No real authentication, no permanent storage — everything stays temporary.
                        <br />
                        Your data is NOT shared and NOT stored anywhere.
                        When you refresh the page or close the tab, all entered data is automatically deleted.
                    </p>

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

