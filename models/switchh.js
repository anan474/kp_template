module.exports = (sequelize, DataTypes) => {
  const switchh = sequelize.define(
    "switchh",
    {
      nama: DataTypes.STRING,
      ip: DataTypes.STRING,
      mac: DataTypes.STRING,
      jml_port: DataTypes.INTEGER,
      lokasi: DataTypes.STRING,
      objek_peta: DataTypes.INTEGER,
      lat: DataTypes.FLOAT,
      lon: DataTypes.FLOAT,
    },
    {}
  );
  switchh.associate = function (models) {};
  return switchh;
};
