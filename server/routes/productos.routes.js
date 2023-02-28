const ProductosController = require('../controllers/productos.controller');
module.exports = function(app){
    app.get('/api', ProductosController.index);
    app.post('/api/productos', ProductosController.createProducto);
    app.get('/api/productos/', ProductosController.getAllProducto);
    app.get('/api/productos/:id', ProductosController.getProducto);
    app.put('/api/productos/:id', ProductosController.actualizarProducto);
    app.delete('/api/productos/:id', ProductosController.eliminarProducto);
}
