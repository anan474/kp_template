const express = require("express");
const router = express.Router();
const fs = require("fs");
const routesPath = `${__dirname}/`;

fs.readdirSync(routesPath).filter((file) => {
  const routeFile = file.split(".").slice(0, -1).join(".").toString();
  return routeFile !== "index"
    ? router.use(`/api/${routeFile}`, require(`./${routeFile}`))
    : "";
});

/*
 * Setup routes for index
 */
router.get("/", (req, res) => {
  res.render("index");
});

/*
 * Handle 404 error
 */
router.use("*", (req, res) => {
  res.status(404).json({
    errors: {
      msg: "URL_NOT_FOUND",
    },
  });
});

module.exports = router;
