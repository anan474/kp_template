const controller = require("../controllers/kabel_fo");
const express = require("express");
const router = express.Router();

router.post("/kabel_fo/", controller.buat);
router.get("/kabel_fo/", controller.ambilSemua);
router.get("/kabel_fo/:id", controller.ambilById);
router.patch("/kabel_fo/:id", controller.update);
router.delete("/kabel_fo/:id", controller.hapus);

module.exports = router;
