module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNULL: false,
        },
        score: {
            type: DataTypes.INTEGER,
            allowNULL: true,
        },
        permission: {
            type: DataTypes.INTEGER,
            allowNULL: true,
        },
    });

    


    return Users;

};