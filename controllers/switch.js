const switchh = require("../models").switchh;
module.exports = {
  buat(req, res) {
    return switchh
      .create({
        ...req.body,
      })
      .then((hasil) => res.redirect("/switch/input_switch"))
      .catch((error) => res.status(400).send(error));
  },
  ambilSemua(req, res) {
    return switchh
      .findAll({})
      .then((hasil) => res.status(200).send(hasil))
      .catch((error) => res.status(400).send(error));
  },
  ambilById(req, res) {
    return switchh
      .findByPk(req.params.id, {})
      .then((hasil) => {
        if (!hasil) {
          return res.status(404).send({
            message: "Data switch tidak ditemukan",
          });
        }
        return res.status(200).send(hasil);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    switchh
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
      .then(res.redirect("/switch/input_switch"))
      .catch((error) => res.status(400).send(error));
  },

  hapus(req, res) {
    return switchh
      .findByPk(req.params.id)
      .then((hasil) => {
        if (!hasil) {
          return res.status(400).send({
            message: "Data switch tidak ditemukan",
          });
        }
        return switchh
          .destroy({
            where: {
              id: req.params.id,
            },
          })
          .then((hasil2) => res.redirect("/switch/input_switch"))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
