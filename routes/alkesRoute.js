const { Router } = require("express");
const alkesRoute = Router();
const { AlkesController } = require("../controller");
const authentication = require("../middleware/authentication.js");

alkesRoute.get("/", authentication, AlkesController.getAlkeses);
alkesRoute.get("/detail/:id", authentication, AlkesController.detail);
alkesRoute.delete("/delete/:id", authentication, AlkesController.delete);

module.exports = alkesRoute;
