const routes = require("express").Router();
const petRoutes = require("./petRoute.js");
const alkesRoutes = require("./alkesRoute.js");
const maintenRoutes = require("./maintenRoute.js");
const adobtRoutes = require("./adobtRoute.js");
const petadobtRoutes = require("./petadobtRoute.js");
const userRoutes = require("./userRoute.js");
const swaggerUi = require("swagger-ui-express");
const apiDocumentation = require("../apidocs.json");

routes.use("/api-docs", swaggerUi.serve);
routes.get("/api-docs", swaggerUi.setup(apiDocumentation));

routes.use("/users", userRoutes);
routes.use("/pets", petRoutes);
routes.use("/alkes", alkesRoutes);
routes.use("/mainten", maintenRoutes);
routes.use("/adobts", adobtRoutes);
routes.use("/petadobts", petadobtRoutes);

module.exports = routes;
