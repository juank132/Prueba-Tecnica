const { Router } = require("express");
const productosController = require("../controllers/productosController");

const productosRouter = Router();

productosRouter.get("/", productosController.appMovies);

productosRouter.post('/', productosController.postMovies);

productosRouter.put('/:id', productosController.putMovies);

productosRouter.delete('/:id', productosController.deleteMovies);  


module.exports = productosRouter;