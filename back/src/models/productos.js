const mongoose = require("mongoose");

const productosSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    price: {
        type: Number,
        required: true
    },
    stock: { 
        type: Number,
        required: true
    }
})


const Producto = mongoose.model("productos", productosSchema);

module.exports = Producto