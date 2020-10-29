module.exports = (sequelize, DataTypes) => {
  const titik_odc = sequelize.define(
    "titik_odc",
    {
      nama: DataTypes.STRING,
      tipe: DataTypes.STRING,
      jml_slot: DataTypes.INTEGER,
      lokasi: DataTypes.STRING,
      objek_peta: DataTypes.INTEGER,
      lat: DataTypes.FLOAT,
      lon: DataTypes.FLOAT,
    },
    {}
  );
  titik_odc.associate = function (models) {};
  return titik_odc;
};
