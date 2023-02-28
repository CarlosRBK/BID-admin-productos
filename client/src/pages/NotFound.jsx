import React from 'react'
import { useRouteError } from "react-router-dom";

function NotFound() {

    const error = useRouteError();

  return (
    <div className='container mt-5'>
        <h1>Página no encontrada</h1>
        <hr />
        <div className='alert alert-danger'>{error.statusText || error.message}</div>
    </div>
  )
}

export default NotFound