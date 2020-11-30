const atribut_tiang = require("../models").atribut_tiang;
module.exports = {
  buat(req, res) {
    return atribut_tiang
      .create({
        ...req.body,
      })
      .then((hasil) =>
        res.redirect("/jaringan_untan/tiang/input_atribut_tiang")
      )
      .catch((error) => res.status(400).send(error));
  },
  ambilSemua(req, res) {
    return atribut_tiang
      .findAll({})
      .then((hasil) => res.status(200).send(hasil))
      .catch((error) => res.status(400).send(error));
  },
  ambilById(req, res) {
    return atribut_tiang
      .findByPk(req.params.id, {})
      .then((hasil) => {
        if (!hasil) {
          return res.status(404).send({
            message: "Data atribut tiang tidak ditemukan",
          });
        }
        return res.status(200).send(hasil);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    atribut_tiang
      .update(
        {
          nama: req.body.nama,
          jenis: req.body.jenis,
          tiang: req.body.tiang,
          kode_pengadaan: req.body.kode_pengadaan,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      )
      .then(res.redirect("/jaringan_untan/tiang/input_atribut_tiang"))
      .catch((error) => res.status(400).send(error));
  },

  hapus(req, res) {
    return atribut_tiang
      .findByPk(req.params.id)
      .then((hasil) => {
        if (!hasil) {
          return res.status(400).send({
            message: "Data atribut tiang tidak ditemukan",
          });
        }
        return atribut_tiang
          .destroy({
            where: {
              id: req.params.id,
            },
          })
          .then((hasil2) =>
            res.redirect("/jaringan_untan/tiang/input_atribut_tiang")
          )
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
