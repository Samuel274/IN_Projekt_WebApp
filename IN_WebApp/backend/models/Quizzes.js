module.exports = (sequelize, DataTypes) => {

    const Quizzes = sequelize.define("Quizzes", {
        question: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        optionA: {
            type: DataTypes.STRING,
            allowNULL: false,
        },
        optionB: {
            type: DataTypes.STRING,
            allowNULL: false,
        },
        optionC: {
            type: DataTypes.STRING,
            allowNULL: false,
        },
        optionD: {
            type: DataTypes.STRING,
            allowNULL: false,
        },
        answer: {
            type: DataTypes.STRING,
            allowNULL: false,
        },
        score: {
            type: DataTypes.INTEGER,
            allowNULL: false,
        }
    });

    Quizzes.associate = (models) => {
        Quizzes.hasMany(models.UserQuizScores, {
            onDelete: "cascade",
            });
    
    }

    return Quizzes;

};