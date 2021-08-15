const express = require('express');
const router = express.Router();
const { Modules, sequelize } = require('../models');


/**Gibt alle vorhandenen Module aus */
router.get("/", async (req,res) => {
    
    const modules = await Modules.findAll();

    res.json(modules);
});

/**Gibt alle vorhandenen einer bestimmten ID Module aus */
router.get("/info/:id", async (req, res) => {
    
    const ModuleId = req.params.id;

    const info = await Quizzes.findAll(
        {where: {id: ModuleId},
    });
    res.json(info);
});


module.exports = router;