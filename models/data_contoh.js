module.exports = (sequelize, DataTypes) => {
  const data_contoh = sequelize.define(
    "data_contoh",
    {
      nama: DataTypes.STRING,
      deskripsi: DataTypes.STRING,
      tipe: DataTypes.STRING,
      jumlah: DataTypes.INTEGER,
      lokasi: DataTypes.STRING,
      objek_peta: DataTypes.INTEGER,
      lat: DataTypes.FLOAT,
      lon: DataTypes.FLOAT,
      kode_pengadaan: DataTypes.STRING,
    },
    {}
  );
  data_contoh.associate = function (models) {};
  return data_contoh;
};
