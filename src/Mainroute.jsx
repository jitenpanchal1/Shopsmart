import { createBrowserRouter } from "react-router";
import LLogin from "./pages/Login";
import Products from "./pages/Products";
import Catogries from "./pages/Catogries";
import Deals from "./pages/Deals";
import Protect from "./protectroute/protect";
import Home from "./pages/Home";
import Allcompo from "./pages/Allcompo";

const Mainroute = createBrowserRouter([
    {
        path: "/",
        element: <>
            <Allcompo />
        </>,

        children: [
            {
                index: true,
                element: <>
                    <Protect>
                        <Home />
                    </Protect>
                </>
            }, {
                path: "products",
                element: <>
                    <Protect>
                        <Products />
                    </Protect>
                </>
            }, {
                path: "categories",
                element: <>
                    <Protect>
                        <Catogries />
                    </Protect>
                </>
            }, {
                path: "deals",
                element: <>
                    <Protect>
                        <Deals />
                    </Protect>
                </>
            }
        ]
    }, {
        path: "/login",
        element: <>
            <LLogin />
        </>
    }

],
    {
        basename: "/Shopsmart",
    })

export default Mainroute;