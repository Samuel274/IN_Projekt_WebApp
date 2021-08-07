const express = require('express');
const router = express.Router();
const { Modules, sequelize } = require('../models');



router.get("/", async (req,res) => {
    
    const modules = await Modules.findAll();

    res.json(modules);
});

router.get("/info/:id", async (req, res) => {
    
    const ModuleId = req.params.id;

    const info = await Quizzes.findAll(
        {where: {id: ModuleId},
    });
    res.json(info);
});


module.exports = router;