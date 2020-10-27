module.exports = (sequelize, DataTypes) => {
  const kabel_fo = sequelize.define(
    "kabel_fo",
    {
      nama: DataTypes.STRING,
      jenis: DataTypes.STRING,
      jml_core: DataTypes.INTEGER,
      tipe_a: DataTypes.INTEGER,
      id_a: DataTypes.INTEGER,
      tipe_b: DataTypes.INTEGER,
      id_b: DataTypes.INTEGER,
    },
    {}
  );
  kabel_fo.associate = function (models) {};
  return kabel_fo;
};
