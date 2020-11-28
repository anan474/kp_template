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

router.get("/input_data", (req, res) => {
  res.render("input_data");
});

router.get("/input_data_2", (req, res) => {
  res.render("input_data_2");
});

router.get("/odc", (req, res) => {
  res.render("odc/index");
});

router.get("/odc/input_koneksi", (req, res) => {
  res.render("odc/input_koneksi");
});

router.get("/odc/input_odc_otb", (req, res) => {
  res.render("odc/input_odc_otb");
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
