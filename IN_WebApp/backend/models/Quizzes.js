module.exports = (sequelize, DataTypes) => {

    const Quizzes = sequelize.define("Quizzes", {
        frage: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        antwort: {
            type: DataTypes.STRING,
            allowNULL: false,
        },
        score: {
            type: DataTypes.INTEGER,
            allowNULL: false,
        }
    });

    return Quizzes;

};