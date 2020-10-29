const kabel_fo = require("../models").kabel_fo;
module.exports = {
  buat(req, res) {
    return kabel_fo
      .create({
        ...req.body,
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
            ...req.body,
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
