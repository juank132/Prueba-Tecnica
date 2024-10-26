const { Router } = require("express");
const productos = require("./productosRouter")

const router = Router();

router.use("/productos", productos)

module.exports = router;