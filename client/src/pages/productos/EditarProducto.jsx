import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import ProductosForm from '../../components/ProductosForm'

function EditarProducto() {
    const navigate = useNavigate();
    const initialValues = {
        titulo: '',
        precio: '',
        descripcion: ''
      }

    const { id } = useParams()
    const [producto, setProducto] = useState(initialValues)

    useEffect(() => {

        const getData = async () => {
          const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/productos/${id}`);
          setProducto(respuesta.data);
        }
    
        getData();
      }, [id])

      const actualizarProducto = async (values, actions) => {

        try {
          const respuesta = await axios.put(`${process.env.REACT_APP_API_URL}/productos/${id}`, values);
          console.log(respuesta);
          if (respuesta.status === 200) {
            Swal.fire(
              `Buen trabajo!`,
              `Se ha actualizado el artículo ${respuesta.data.titulo}  con exito!`,
              'success'
            );
            navigate('/');
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
      initialValues={producto}
      botonText="Actualizar"
      onSubmit={actualizarProducto}
      
      />
    </>
  )
}

export default EditarProducto