import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/Layout";
import NotFound from "../pages/NotFound";
import EditarProducto from "../pages/productos/EditarProducto";
import ProductoDetalle from "../pages/productos/ProductoDetalle";
import Productos from "../pages/productos/Productos";
import ProductosAdd from "../pages/productos/ProductosAdd";



export default createBrowserRouter([
    {
        path:'/',
        element: <Layouts />,
        errorElement: <NotFound />,
        children:[
            {
                index: true,
                element: <ProductosAdd />
            },
            {
                path:'productos',
                element: <Productos />,
            },
            {
                path:'productos/agregar',
                element: <ProductosAdd />,
            },
            {
                path:'productos/:id',
                element: <ProductoDetalle />,
            },
            {
                path:'productos/:id/edit',
                element: <EditarProducto />,
            }
        ]
    }
]);