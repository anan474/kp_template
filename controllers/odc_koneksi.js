const koneksi_odc = require("../models").koneksi_odc;
module.exports = {
  buat(req, res) {
    return koneksi_odc
      .create({
        ...req.body,
      })
      .then((hasil) => res.redirect("/odc/input_koneksi"))
      .catch((error) => res.status(400).send(error));
  },
  ambilSemua(req, res) {
    return koneksi_odc
      .findAll({})
      .then((hasil) => res.status(200).send(hasil))
      .catch((error) => res.status(400).send(error));
  },
  ambilById(req, res) {
    return koneksi_odc
      .findByPk(req.params.id, {})
      .then((hasil) => {
        if (!hasil) {
          return res.status(404).send({
            message: "koneksi_odc tidak ditemukan",
          });
        }
        return res.status(200).send(hasil);
      })
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return koneksi_odc
      .findByPk(req.params.id)
      .then((hasil) => {
        if (!hasil) {
          return res.status(404).send({
            message: "koneksi_odc tidak ditemukan",
          });
        }
        return koneksi_odc
          .update({
            ...req.body,
          })
          .then((hasil2) => res.status(200).send(hasil2))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  hapus(req, res) {
    return koneksi_odc
      .findByPk(req.params.id)
      .then((hasil) => {
        if (!hasil) {
          return res.status(400).send({
            message: "koneksi_odc tidak ditemukan",
          });
        }
        return koneksi_odc
          .destroy({
            where: {
              id: req.params.id,
            },
          })
          .then((hasil2) => res.redirect("/odc/input_koneksi"))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
