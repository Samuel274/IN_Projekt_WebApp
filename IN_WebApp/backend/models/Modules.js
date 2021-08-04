module.exports = (sequelize, DataTypes) => {

    const Modules = sequelize.define("Modules", {
        titel: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNULL: false,
        },
    });


    Modules.associate = (models) => {
        Modules.hasMany(models.Quizzes, {
            onDelete: "cascade",
            });

        Modules.hasMany(models.UserQuizScores, {
            onDelete: "cascade",
            });
    
    }



    return Modules;


};