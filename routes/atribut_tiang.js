const controller = require("../controllers/atribut_tiang");
const express = require("express");
const router = express.Router();

router.post("/", controller.buat);
router.get("/", controller.ambilSemua);
router.get("/:id", controller.ambilById);
router.post("/edit", controller.update);
router.delete("/:id", controller.hapus);

module.exports = router; 
