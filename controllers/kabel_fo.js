const kabel_fo = require("../models").kabel_fo;
module.exports = {
  buat(req, res) {
    return kabel_fo
      .create({
        kode1: req.body.kode1,
        kode2: req.body.kode2,
        kode3: req.body.kode3,
      })
      .then((hasil) => res.status(201).send(hasil))
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
      .findById(req.params.id, {})
      .then((hasil) => {
        if (!hasil) {
          return res.status(404).send({
            message: "kabel_fo tidak ditemukan",
          });
        }
        return res.status(200).send(hasil);
      })
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return kabel_fo
      .findById(req.params.id)
      .then((hasil) => {
        if (!hasil) {
          return res.status(404).send({
            message: "kabel_fo tidak ditemukan",
          });
        }
        return kabel_fo
          .update({
            kode1: req.body.kode1 || hasil.kode1,
            kode2: req.body.kode2 || hasil.kode2,
            kode3: req.body.kode3 || hasil.kode3,
          })
          .then((hasil2) => res.status(200).send(hasil2))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  hapus(req, res) {
    return kabel_fo
      .findById(req.params.id)
      .then((hasil) => {
        if (!hasil) {
          return res.status(400).send({
            message: "kabel_fo tidak ditemukan",
          });
        }
        return kabel_fo
          .destroy()
          .then((hasil2) => res.status(204).send(hasil2))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
