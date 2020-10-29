module.exports = (sequelize, DataTypes) => {
  const atribut_tiang = sequelize.define(
    "atribut_tiang",
    {
      nama: DataTypes.STRING,
      jenis: DataTypes.STRING,
      tiang: DataTypes.INTEGER,
    },
    {}
  );
  atribut_tiang.associate = function (models) {};
  return atribut_tiang;
};
