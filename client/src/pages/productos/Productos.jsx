import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
function Productos() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {

    const getData = async () => {
      const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/productos`);
      setProductos(respuesta.data);
    }

    getData();
  }, []);

  const eliminarProducto = async (productoID) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/productos/${productoID}`);

      setProductos( productos.filter( (producto) => producto._id !== productoID) );

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Algo anda mal! ERROR ${error?.response?.data?.message || error.message}`,
        footer: '<a href="">Why do I have this issue?</a>'
      })
  }
}

const confirmarEliminar = (productoID) => {
  Swal.fire({
    title: 'Estas seguro?',
    text: "Una vez eliminado, no se puede revertir el cambio!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Confirmar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Eliminado!',
        'El producto ha sido eliminado.',
        'success'
      )
      eliminarProducto(productoID);
    }
  })

}
  
  return (
    <>
      <h1 className='row justify-content-center mb-3'>Listado de productos</h1>
      <table className='table table-striped table-bordered mt-3'>
        <thead className='bg-dark bg-gradient p-2 text-white text-center'>
          <tr className='fit'>
            <th>Titulo</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          { productos.map( (producto, index) => <tr key={index}>
          <td className='text-center'>{ producto.titulo }</td>
          <td className='text-center'>{ producto.descripcion }</td>
          <td className='text-center'>{ "$" +  producto.precio }</td>
          <td className='text-center'>
            <div className='btn-group float-end'>
              <Link className='btn btn-secondary m-0' to={`/productos/${producto._id}`}>Detalle</Link>
              <Link className='btn btn-secondary m-0' to={`/productos/${producto._id}/edit`}>Editar</Link>
              <button className='btn btn-danger m-0' onClick={ () => {confirmarEliminar(producto._id)}}>Eliminar</button>
            </div>
          </td>
          </tr> ) }
        </tbody>
      </table>
    </>
  )
}

export default Productos