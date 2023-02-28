const { Producto } = require("../models/producto.model")

module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

module.exports.createProducto = async (request, response) => {
    try {
        const { titulo, precio, descripcion } = request.body;
        producto = await Producto.create({
            titulo,
            precio,
            descripcion
        });
        response.json(producto);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
};

module.exports.getAllProducto = async (request, response) => {
    try {
        const producto = await Producto.find({})
        response.json(producto);
    } catch (error) {
        response.status(400);
        response.json(error);
    }    
};

module.exports.getProducto = async (request, response) => {
    try {
        const product = await Producto.findOne({_id:request.params.id})
        response.json(product);
    } catch (error) {
        response.status(400);
        response.json(error);
    }    
};

module.exports.actualizarProducto = async (request, response) => {
    try {
        const product = await Producto.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        response.json(product);
    } catch (error) {
        response.status(400);
        response.json(error);
    }    
};

module.exports.eliminarProducto = async (request, response) => {
        try {
            const product = await Producto.deleteOne({ _id: request.params.id })
            response.json(product);
        } catch (error) {
            response.status(400);
            response.json(error);
        }    
};