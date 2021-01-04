const fetch = require("node-fetch");

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

  data_kabel(req, res) {
    return fetch(`http://203.24.50.236/api/0.6/way/${req.params.id}/full.json`)
      .then((hasil) => hasil.json())
      .then((hasil) => {
        console.log(hasil);
        if (!hasil || !hasil.elements[0]) {
          return res.status(404).send({
            message: "Kabel Fiber Optik Tidak Ditemukan",
          });
        }
        let titik = hasil.elements;
        titik.pop();
        titik = titik.map((item) => [item.lat, item.lon]);

        return res.status(200).send({ garis: titik, tipe: "garis" });
      })
      .catch((error) => res.status(400).send(error));
  },
};
