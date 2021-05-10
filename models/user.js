var bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "user",
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {}
  );
  model.associate = function (models) {};
  return model;
};
