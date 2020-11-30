const fetch = require("node-fetch");

const titik_odc = require("../models").titik_odc;
module.exports = {
  buat(req, res) {
    return titik_odc
      .create({
        ...req.body,
      })
      .then((hasil) => res.redirect("/jaringan_untan/odc/input_odc_otb"))
      .catch((error) => res.status(400).send(error));
  },
  ambilSemua(req, res) {
    return titik_odc
      .findAll({})
      .then((hasil) => res.status(200).send(hasil))
      .catch((error) => res.status(400).send(error));
  },
  ambilById(req, res) {
    return titik_odc
      .findByPk(req.params.id, {})
      .then((hasil) => {
        if (!hasil) {
          return res.status(404).send({
            message: "titik_odc tidak ditemukan",
          });
        }
        return res.status(200).send(hasil);
      })
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return titik_odc
      .findByPk(req.params.id)
      .then((hasil) => {
        if (!hasil) {
          return res.status(404).send({
            message: "titik_odc tidak ditemukan",
          });
        }
        return titik_odc
          .update({
            ...req.body,
          })
          .then((hasil2) => res.status(200).send(hasil2))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  hapus(req, res) {
    return titik_odc
      .findByPk(req.params.id)
      .then((hasil) => {
        if (!hasil) {
          return res.status(400).send({
            message: "titik_odc tidak ditemukan",
          });
        }
        return titik_odc
          .destroy({
            where: {
              id: req.params.id,
            },
          })
          .then((hasil2) => res.redirect("/jaringan_untan/odc/input_odc_otb"))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  data_titik(req, res) {
    return fetch(`http://10.128.0.207/api/0.6/node/${req.params.id}.json`)
      .then((hasil) => hasil.json())
      .then((hasil) => {
        if (!hasil || !hasil.elements[0]) {
          return res.status(404).send({
            message: "titik peta odc tidak ditemukan",
          });
        }
        const { lat, lon } = hasil.elements[0];
        return res.status(200).send({ lat, lon, tipe: "node" });
      })
      .catch((error) => res.status(400).send(error));
  },
};
