const controller = require("../controllers/odc_koneksi");
const express = require("express");
const router = express.Router();

router.post("/", controller.buat);
router.get("/", controller.ambilSemua);
router.get("/:id", controller.ambilById);
router.patch("/:id", controller.update);
router.delete("/:id", controller.hapus);

module.exports = router;
