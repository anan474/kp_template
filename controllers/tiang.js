const fetch = require("node-fetch");

const tiang = require("../models").tiang;
module.exports = {
  buat(req, res) {
    return tiang
      .create({
        ...req.body,
      })
      .then((hasil) => res.redirect("/tiang/input_tiang"))
      .catch((error) => res.status(400).send(error));
  },
  ambilSemua(req, res) {
    return tiang
      .findAll({})
      .then((hasil) => res.status(200).send(hasil))
      .catch((error) => res.status(400).send(error));
  },
  ambilById(req, res) {
    return tiang
      .findByPk(req.params.id, {})
      .then((hasil) => {
        if (!hasil) {
          return res.status(404).send({
            message: "Data tiang tidak ditemukan",
          });
        }
        return res.status(200).send(hasil);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    tiang
      .update(
        {
          nama: req.body.nama,
          lokasi: req.body.lokasi,
          objek_peta_id: req.body.objek_peta_id,
          lat: req.body.lat,
          lon: req.body.lon,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      )
      .then(res.redirect("/tiang/input_tiang"))
      .catch((error) => res.status(400).send(error));
  },

  hapus(req, res) {
    return tiang
      .findByPk(req.params.id)
      .then((hasil) => {
        if (!hasil) {
          return res.status(400).send({
            message: "Data tiang tidak ditemukan",
          });
        }
        return tiang
          .destroy({
            where: {
              id: req.params.id,
            },
          })
          .then((hasil2) => res.redirect("/tiang/input_tiang"))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  data_titik(req, res) {
    return fetch(`http://203.24.50.138:8080/api/0.6/node/${req.params.id}.json`)
      .then((hasil) => hasil.json())
      .then((hasil) => {
        if (!hasil || !hasil.elements[0]) {
          return res.status(404).send({
            message: "titik tiang tidak ditemukan",
          });
        }
        const { lat, lon } = hasil.elements[0];
        return res.status(200).send({ lat, lon, tipe: "node" });
      })
      .catch((error) => res.status(400).send(error));
  },
};
