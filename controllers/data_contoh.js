const data_contoh = require("../models").data_contoh;
module.exports = {
  buat(req, res) {
    return data_contoh
      .create({
        ...req.body,
      })
      .then((hasil) => res.redirect("/jaringan_untan/input_data"))
      .catch((error) => res.status(400).send(error));
  },
  ambilSemua(req, res) {
    return data_contoh
      .findAll({})
      .then((hasil) => res.status(200).send(hasil))
      .catch((error) => res.status(400).send(error));
  },
  ambilById(req, res) {
    return data_contoh
      .findByPk(req.params.id, {})
      .then((hasil) => {
        if (!hasil) {
          return res.status(404).send({
            message: "data_contoh tidak ditemukan",
          });
        }
        return res.status(200).send(hasil);
      })
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return data_contoh
      .findByPk(req.params.id)
      .then((hasil) => {
        if (!hasil) {
          return res.status(404).send({
            message: "data_contoh tidak ditemukan",
          });
        }
        return data_contoh
          .update({
            ...req.body,
          })
          .then((hasil2) => res.status(200).send(hasil2))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  hapus(req, res) {
    return data_contoh
      .findByPk(req.params.id)
      .then((hasil) => {
        if (!hasil) {
          return res.status(400).send({
            message: "data_contoh tidak ditemukan",
          });
        }
        return data_contoh
          .destroy({
            where: {
              id: req.params.id,
            },
          })
          .then((hasil2) => res.redirect("/jaringan_untan/input_data"))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
