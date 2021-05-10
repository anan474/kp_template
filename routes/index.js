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

// ODC

router.get("/odc", (req, res) => {
  res.render("odc/index");
});

router.get("/odc/input_koneksi", (req, res) => {
  res.render("odc/input_koneksi");
});

router.get("/odc/input_odc_otb", (req, res) => {
  res.render("odc/input_odc_otb");
});

// TIANG
router.get("/tiang", (req, res) => {
  res.render("tiang/index");
});

router.get("/tiang/input_tiang", (req, res) => {
  res.render("tiang/tiang");
});

router.get("/tiang/edit_tiang/:id", (req, res) => {
  res.render("tiang/edit_tiang");
});


router.get("/tiang/input_atribut_tiang", (req, res) => {
  res.render("tiang/atribut_tiang");
});

router.get("/tiang/atribut_tiang/edit_atribut_tiang/:id", (req, res) => {
  res.render("tiang/edit_atribut_tiang");
});


// KABEL FO
router.get("/kabel_fo", (req, res) => {
  res.render("kabel_fo/index");
});

router.get("/kabel_fo/input_kabel_fo", (req, res) => {
  res.render("kabel_fo/kabel_fo");
});

router.get("/kabel_fo/edit_kabel_fo/:id", (req, res) => {
  res.render("kabel_fo/edit_kabel_fo");
});

// SWITCH
router.get("/switch", (req, res) => {
  res.render("switch/index");
});

router.get("/switch/input_switch", (req, res) => {
  res.render("switch/switch");
});

// ACCESS POINT
router.get("/access_point", (req, res) => {
  res.render("access_point/index");
});

router.get("/access_point/input_access_point", (req, res) => {
  res.render("access_point/access_point");
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
