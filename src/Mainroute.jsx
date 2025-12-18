import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
const LLogin = lazy(() => import("./pages/Login"))
const Products = lazy(() => import("./pages/Products"))
const Contact = lazy(() => import("./pages/Contact"))
const Deals = lazy(() => import("./pages/Deals"))
const Allcompo = lazy(() => import("./pages/Allcompo"))
const Home = lazy(() => import("./pages/Home"))
const DetailProduct = lazy(() => import("./pages/DetailProduct"))
const Cart = lazy(() => import("./pages/Cartitems"))
const Protect = lazy(() => import("./protectroute/Protect"))
const About = lazy(() => import("./pages/About"))
const ProjectInfo = lazy(() => import("./pages/ProjectInfo"))



const Mainroute = createBrowserRouter([
    {
        path: "/",
        element: <>
            <Suspense fallback={<Loader />}>
                <Allcompo />
            </Suspense>
        </>,

        children: [
            {
                index: true,
                element: <>
                    <Suspense fallback={<Loader />}>
                        <Home />
                    </Suspense>
                </>
            }, {
                path: "products",
                element: <>
                    <Suspense fallback={<Loader />}>
                        <Products />
                    </Suspense>
                </>
            }, {
                path: "contact",
                element: <>
                    <Suspense fallback={<Loader />}>
                        <Contact />
                    </Suspense>
                </>
            }, {
                path: "about",
                element: <>
                    <Suspense fallback={<Loader />}>
                        <About />
                    </Suspense>
                </>
            }, {
                path: "deals",
                element: <>
                    <Suspense fallback={<Loader />}>
                        <Deals />
                    </Suspense>
                </>
            }, {
                path: "products/:id",
                element: <>
                    <Suspense fallback={<Loader />}>
                        <DetailProduct />
                    </Suspense>
                </>
            }, {
                path: "cart",
                element: <>
                    <Suspense fallback={<Loader />}>
                        <Protect>
                            <Cart />
                        </Protect>
                    </Suspense>

                </>
            }, {
                path: "projectinfo",
                element: <>
                    <Suspense fallback={<Loader />}>
                        <ProjectInfo />
                    </Suspense>
                </>
            }
        ]
    }, {
        path: "/login",
        element: <>
            <Suspense fallback={<Loader />}>
                <LLogin />
            </Suspense>

        </>
    }

],
    {
        basename: "/Shopsmart",
    })

export default Mainroute;