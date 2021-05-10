module.exports = (sequelize, DataTypes) => {
  const atribut_tiang = sequelize.define(
    "atribut_tiang",
    {
      nama: DataTypes.STRING,
      jenis_klem: DataTypes.STRING,
      jumlah_klem: DataTypes.INTEGER,
      tiang_id: DataTypes.INTEGER,
      tiang_nama: DataTypes.STRING,
      kode_pengadaan: DataTypes.STRING,
    },
    {}
  );
  atribut_tiang.associate = function (models) { };
  return atribut_tiang;
};
