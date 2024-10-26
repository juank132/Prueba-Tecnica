const Producto = require("../models/productos");



module.exports = {
        getProductosService: async () => {
                const productos = await Producto.find();
                return productos;
        },
        addProductosService: async (producto) => {
                const productos = await Producto.create(producto);
                return productos;
        },
        putProductosService: async (producto) => {
                const productos = await Producto.updateOne(producto);
                return productos;
        },
        deleteProductosService: async (id) => {
                const productos = await Producto.findByIdAndDelete(id);
                return productos;
        },
        getProductosIdService: async (id) => {
                const productos = await Producto.findById(id);
                return productos;
        }
}




