module.exports = (sequelize, DataTypes) => {
  const access_point = sequelize.define(
    "access_point",
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
  access_point.associate = function (models) {};
  return access_point;
};
