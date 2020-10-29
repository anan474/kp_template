module.exports = (sequelize, DataTypes) => {
  const koneksi_odc = sequelize.define(
    "koneksi_odc",
    {
      nama: DataTypes.STRING,
      no_slot: DataTypes.INTEGER,
      sumber_nama: DataTypes.STRING,
      sumber_id: DataTypes.INTEGER,
    },
    {}
  );
  koneksi_odc.associate = function (models) {};
  return koneksi_odc;
};
