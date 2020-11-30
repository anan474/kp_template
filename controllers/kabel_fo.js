const kabel_fo = require("../models").kabel_fo;
module.exports = {
  buat(req, res) {
    return kabel_fo
      .create({
        ...req.body,
      })
      .then((hasil) => res.redirect("/kabel_fo/input_kabel_fo"))
      .catch((error) => res.status(400).send(error));
  },
  ambilSemua(req, res) {
    return kabel_fo
      .findAll({})
      .then((hasil) => res.status(200).send(hasil))
      .catch((error) => res.status(400).send(error));
  },
  ambilById(req, res) {
    return kabel_fo
      .findByPk(req.params.id, {})
      .then((hasil) => {
        if (!hasil) {
          return res.status(404).send({
            message: "Data Kabel Fiber Optik tidak ditemukan",
          });
        }
        return res.status(200).send(hasil);
      })
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    kabel_fo
      .update(
        {
          nama: req.body.nama,
          jenis: req.body.jenis,
          jml_core: req.body.jml_core,
          tipe_a: req.body.tipe_a,
          id_a: req.body.id_a,
          tipe_b: req.body.tipe_b,
          id_b: req.body.id_b,
          objek_peta: req.body.objek_peta,
          lat: req.body.lat,
          lon: req.body.lon,
          kode_pengadaan: req.body.kode_pengadaan,
        },
        { where: { id: req.body.id } }
      )
      .then(res.redirect("/kabel_fo/input_kabel_fo"))
      .catch((error) => res.status(400).send(error));
  },

  hapus(req, res) {
    return kabel_fo
      .findByPk(req.params.id)
      .then((hasil) => {
        if (!hasil) {
          return res.status(400).send({
            message: "Data Kabel Fiber Optik tidak ditemukan",
          });
        }
        return kabel_fo
          .destroy({
            where: {
              id: req.params.id,
            },
          })
          .then((hasil2) => res.redirect("/kabel_fo/input_kabel_fo"))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
