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
        role: {
            type: DataTypes.STRING,
            allowNULL: true, /**STUDENT IF NULL */
        },
    });


    Users.associate = (models) => {
        Users.hasMany(models.UserQuizScores, {
            onDelete: "cascade",
            });
    
    }

    


    return Users;

};