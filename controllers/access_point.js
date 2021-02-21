const access_point = require("../models").access_point;
module.exports = {
  buat(req, res) {
    return access_point
      .create({
        ...req.body,
      })
      .then((hasil) => res.redirect("/access_point/input_access_point"))
      .catch((error) => res.status(400).send(error));
  },
  ambilSemua(req, res) {
    return access_point
      .findAll({})
      .then((hasil) => res.status(200).send(hasil))
      .catch((error) => res.status(400).send(error));
  },
  ambilById(req, res) {
    return access_point
      .findByPk(req.params.id, {})
      .then((hasil) => {
        if (!hasil) {
          return res.status(404).send({
            message: "Data access_point tidak ditemukan",
          });
        }
        return res.status(200).send(hasil);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    access_point
      .update(
        {
          nama: req.body.nama,
          lokasi: req.body.lokasi,
          objek_peta_id: req.body.objek_peta_id,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      )
      .then(res.redirect("/access_point/input_access_point"))
      .catch((error) => res.status(400).send(error));
  },

  hapus(req, res) {
    return access_point
      .findByPk(req.params.id)
      .then((hasil) => {
        if (!hasil) {
          return res.status(400).send({
            message: "Data access_point tidak ditemukan",
          });
        }
        return access_point
          .destroy({
            where: {
              id: req.params.id,
            },
          })
          .then((hasil2) => res.redirect("/access_point/input_access_point"))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
