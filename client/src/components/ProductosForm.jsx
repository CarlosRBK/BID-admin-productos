import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ProductoErrores = Yup.object().shape({
  titulo: Yup.string()
    .min(5, 'El título debe tener como minimo 5 caracteres')
    .max(70, 'El título no puede ser muy largo')
    .required('Requerido'),
  precio: Yup.number()
    .integer('Debe ser numero entero')
    .required('Campo requerido')
    .positive('No puede ser negativo'),
  descripcion: Yup.string()
    .required('Ingrese una descripción')
    .min(10, 'Se necesita como minimo 18 caracteres.')
    .max(200, 'No puede superar los 200 caracteres'),
})

const ProductosForm = ({initialValues, botonText, onSubmit}) => {

  return (
    <Formik 
      enableReinitialize={true}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={ProductoErrores}
    >
      {({ errors, touched, isValid, dirty }) => (
        <div className='row align-items-center '>
          <Form className='mx-auto col-10 col-md-8 col-lg-6 shadow-sm p-3 text-bg-dark bg-dark bg-gradient border border-dark border-start-0 rounded-4'>
          <h1 className='row justify-content-center mb-3'>{botonText} Producto</h1>
              <div className="mb-3 row text-bg-light bg-light bg-gradient p-2 rounded shadow-sm p-3 ">
                <label className="col-sm-2 ">Título</label>
                <div className="col-sm-10  ">
                  <Field name='titulo' className='form-control ' placeholder='Ingrese un título' />
                  {touched.titulo && errors.titulo && <div className='ms-3 mt-1 text-danger '>{errors.titulo}</div>}
                </div>
              </div>
              <div className="mb-3 row text-bg-light bg-light bg-gradient p-2 rounded shadow-sm p-3 " >
                <label className="col-sm-2 ">Precio</label>
                <div className="col-sm-10">
                  <Field name='precio' type='number' className='form-control' placeholder='$' />
                  {touched.precio && errors.precio && <div className='ms-3 mt-1 text-danger'>{errors.precio}</div>}
                </div>
              </div>
              <div className="mb-3 row text-bg-light bg-light bg-gradient p-2 rounded shadow-sm p-3 ">
                <label className="col-sm-2 ">Descripción</label>
                <div className="col-sm-10">
                  <Field as="textarea" name='descripcion' className='form-control' placeholder='Descripcion del artículo' />
                  {touched.descripcion && errors.descripcion && 
                  <div className='ms-3 mt-1 text-danger' id="validationTooltip05" required>{errors.descripcion}</div>}
                </div> 
              </div>
              <div className='text-center'>
                <button className='btn btn-light justify-content-center'>{botonText} Producto</button>
              </div>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default ProductosForm