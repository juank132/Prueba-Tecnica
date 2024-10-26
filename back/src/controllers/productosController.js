const productosService = require("../services/productosService");

module.exports = {
    appMovies: async (req, res) => {
        try {
            const productos = await productosService.getProductosService()
            res.status(200).json(productos)

        } catch (error) {
            res.status(500).json({
                error: "Error interno del servidor"
            })
        }
    },

    postMovies: async (req, res) => {
        const { name, price, stock } = req.body;

        if (!name || typeof name !== 'string') {
            return res.status(400).json({ error: "El nombre es obligatorio y debe ser una cadena." });
        }

        if (!price || typeof price !== 'number') {
            return res.status(400).json({ error: "El precio es obligatorio y debe ser un número." });
        }

        if (!stock || !Number.isInteger(stock) || stock <= 0) {
            return res.status(400).json({ error: "El stock es obligatorio y debe ser un número entero mayor que 0." });
        }

        try {
            await productosService.addProductosService({ name, price, stock });
            res.status(201).json("Producto Creado");

        } catch (error) {

            res.status(500).json({
                error: "Error interno del servidor"
            })
        }
    },

    putMovies: async (req, res) => {
        const { name, price, stock } = req.body;
        const { id } = req.params;

        try {
            const producto = await productosService.getProductosIdService(id)

            if (!producto) {
                return res.status(404).json({ error: "Producto no encontrado" });

            }

            const actualizado = await productosService.putProductosService({ name, price, stock });

            if (!actualizado) {
                return res.status(404).json({ error: "Producto no encontrado" });

            }

            res.status(200).json("Producto Actualizado");
        } catch (error) {
            res.status(500).json({
                error: "Error interno del servidor"
            })
        }
    },

    deleteMovies: async (req, res) => {
        const { id } = req.params;
        try {
            const eliminado = await productosService.deleteProductosService(id);

            if (!eliminado) {
                return res.status(404).json({ error: "Producto no encontrado" });
            }

            res.status(204).json("Producto Eliminado");
        } catch (error) {
            res.status(500).json({
                error: "Error interno del servidor"
            })
        }
    }
};