import axios from 'axios'
import React from 'react'
import Swal from 'sweetalert2'
import ProductosForm from '../../components/ProductosForm'
import Productos from './Productos'

function ProductosAdd() {
  const initialValues = {
    titulo: '',
    precio: '',
    descripcion: ''
  }

  const crearProducto = async (values, actions) => {

    try {
      const respuesta = await axios.post(`${process.env.REACT_APP_API_URL}/productos`, values);
      console.log(respuesta);
      if (respuesta.status === 200) {
        Swal.fire(
          `Agregado!`,
          `Se ha registrado el producto ${respuesta.data.titulo}con exito!`,
          'success'
        );

        actions.resetForm(initialValues);

      };
    } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Something went wrong! ERROR ${error?.response?.data?.message || error.message}`,
          footer: '<a href="">Why do I have this issue?</a>'
        })
    }
  }

  return (
    <>
      <ProductosForm 
        initialValues={initialValues}
        botonText="Agregar"
        onSubmit={crearProducto}
        />
      <hr />
      <div className='row align-items-center'>
        <Productos />
      </div>

    </>
  )
}

export default ProductosAdd