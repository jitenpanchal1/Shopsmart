import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './reduxslices/store.js'
import { RouterProvider } from 'react-router'
import Mainroute from './Mainroute.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={Mainroute}>
        </RouterProvider>
    </Provider>

)
