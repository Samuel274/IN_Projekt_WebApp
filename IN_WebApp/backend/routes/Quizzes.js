const express = require('express');
const router = express.Router();

const { Quizzes, sequelize } = require('../models');

router.get("/info/:id", async (req, res) => {
    
    const ModuleId = req.params.id;

    const info = await Quizzes.findAll(
        {where: {ModuleId: ModuleId},
    });
    res.json(info);
});

module.exports = router;