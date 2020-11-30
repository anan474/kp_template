module.exports = (sequelize, DataTypes) => {
    const tiang = sequelize.define(
        "tiang",
        {
            nama: DataTypes.STRING,
            lokasi: DataTypes.STRING,
            objek_peta_id: DataTypes.INTEGER,
        },
        {}
    );
    tiang.associate = function (models) { };
    return tiang;
};
