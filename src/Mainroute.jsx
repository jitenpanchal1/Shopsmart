import { createBrowserRouter } from "react-router";
// import LLogin from "./pages/Login";
import Protect from "./protectroute/protect";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
const LLogin = lazy(() => import("./pages/Login"))
const Products = lazy(() => import("./pages/Products"))
const Catogries = lazy(() => import("./pages/Catogries"))
const Deals = lazy(() => import("./pages/Deals"))
const Allcompo = lazy(() => import("./pages/Allcompo"))
const Home = lazy(() => import("./pages/Home"))


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
                    {/* <Protect> */}
                        <Suspense fallback={<Loader />}>
                            <Products />
                        </Suspense>
                    {/* </Protect> */}
                </>
            }, {
                path: "categories",
                element: <>
                    {/* <Protect> */}
                        <Suspense fallback={<Loader />}>
                            <Catogries />
                        </Suspense>
                    {/* </Protect> */}
                </>
            }, {
                path: "deals",
                element: <>
                    {/* <Protect> */}
                        <Suspense fallback={<Loader />}>
                            <Deals />
                        </Suspense>
                    {/* </Protect> */}
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