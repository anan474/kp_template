module.exports = (sequelize, DataTypes) => {
  const acc_point = sequelize.define(
    "acc_point",
    {
      nama: DataTypes.STRING,
      ip: DataTypes.STRING,
      mac: DataTypes.STRING,
      band: DataTypes.STRING,
      lokasi: DataTypes.STRING,
      objek_peta: DataTypes.INTEGER,
      lat: DataTypes.FLOAT,
      lon: DataTypes.FLOAT,
      kode_pengadaan: DataTypes.STRING,
    },
    {}
  );
  acc_point.associate = function (models) {};
  return acc_point;
};
