const express = require('express');
const router = express.Router();

const { Quizzes, sequelize } = require('../models');


/**Gibt alle vorhandenen Quizze aus */
router.get("/info/:id", async (req, res) => {
    
    const ModuleId = req.params.id;

    const info = await Quizzes.findAll(
        {where: {ModuleId: ModuleId},
    });
    res.json(info);
});

/**Erstellt ein Quiz nach dem angegeben Schema */
router.post("/quizcreate", async (req, res) => {
    const {question, optionA, optionB, optionC, optionD, answer, score, ModuleId} = req.body;

    Quizzes.create({
        question: question,
        optionA: optionA,
        optionB: optionB,
        optionC: optionC,
        optionD: optionD,
        answer: answer,
        score: score,
        ModuleId: ModuleId,
    });
    console.log("Success");


})

module.exports = router;