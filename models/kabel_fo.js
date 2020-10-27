module.exports = (sequelize, DataTypes) => {
  const kabel_fo = sequelize.define(
    "kabel_fo",
    {
      kode1: DataTypes.STRING,
      kode3: DataTypes.INTEGER,
      rp5: DataTypes.BIGINT,
    },
    {}
  );
  kabel_fo.associate = function (models) {};
  return kabel_fo;
};
