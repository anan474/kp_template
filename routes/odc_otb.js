const controller = require("../controllers/odc_otb");
const express = require("express");
const router = express.Router();

router.post("/", controller.buat);
router.get("/", controller.ambilSemua);
router.get("/:id", controller.ambilById);
router.patch("/:id", controller.update);
router.delete("/:id", controller.hapus);
router.get("/data_titik/:id", controller.data_titik);

module.exports = router;
