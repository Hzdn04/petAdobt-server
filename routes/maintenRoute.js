const { Router } = require("express");
const maintenRoute = Router();
const { MaintenController } = require("../controller");
const authentication = require("../middleware/authentication.js");

maintenRoute.get("/", authentication, MaintenController.getMaintens);
maintenRoute.post("/create", authentication, MaintenController.create);
maintenRoute.delete("/delete/:id", authentication, MaintenController.delete);

module.exports = maintenRoute;
