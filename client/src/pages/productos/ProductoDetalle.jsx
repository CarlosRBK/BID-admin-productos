import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ProductoDetalle() {

    const { id } = useParams()
    const [producto, setProducto] = useState({})

    useEffect(() => {

        const getData = async () => {
          const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/productos/${id}`);
          setProducto(respuesta.data);
        }
    
        getData();
      }, [id])

  return (
    <div className="card text-center">
    <div className="card-header">
        Detalle del producto
    </div>
    <div className="card-body">
        <h5 className="card-title"><strong>Producto:</strong> {producto.titulo}</h5>
        <p className="card-text"><strong>Descripción:</strong> {producto.descripcion}</p>
        <p className='card-text'><strong>Precio:</strong> {"$" + producto.precio} </p>
        <Link to="/" className="btn btn-dark">Volver</Link>
    </div>
    <div className="card-footer text-muted">
        Fecha de carga: {producto.createdAt}
    </div>
    </div>
  )
}

export default ProductoDetalle