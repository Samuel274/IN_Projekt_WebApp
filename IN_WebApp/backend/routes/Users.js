const express = require('express');
const router = express.Router();
const { Users, sequelize } = require('../models');
const bcrypt = require("bcrypt");
const {validateToken} = require("../middlewares/AuthMiddleware");
const {sign} = require('jsonwebtoken');

router.post('/registration', async (req, res) => {
    const {username, password} = req.body;

    const user = await Users.findOne({ where: { username: username } });

    if (!user) {
        bcrypt.hash(password, 10).then((hash) => {/*10 Roundes (10 mal hashen)*/
            Users.create({
                username: username,
                password: hash,
                role: "Student",
        });
        console.log("SUCCESS");
    }); 
    } else {
        res.json({message: "hallo"});
    }
});


router.get('/users', validateToken, (req, res) => {
    res.json(req.user);
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
  
    const user = await Users.findOne({ where: { username: username } });
  
    if (!user) res.json({ error: "Benutzer existiert nicht!" });
  
    bcrypt.compare(password, user.password).then(async (match) => {
      if (!match) res.json({ error: "Die Kombination aus Benutzername und Passwort ist falsch!" });
  
      const accessToken = sign(
        { username: user.username, id: user.id, role: user.role },
        "importantsecret" /**Random generierten String verwenden => mehr sicherheit */
      );
      res.json({ token: accessToken, username: username, id: user.id, role: user.role });
    });
  });

  router.delete("/delete/:username", async (req, res) => {
    const username = req.params.username;
  
    await Users.destroy({
        where: {
            username: username,
        },
    });
    res.json(req.params.username);
   });

  router.get('/auth', validateToken, (req, res) => {
    res.json(req.user);
});

router.get("/basicinfo/:id", async (req, res) => {
    const id = req.params.id;

    const basicInfo = await Users.findByPk(id, {
        attributes: {exclude: ['password']}    /* Exclude Password*/
       });
   res.json(basicInfo);
});

router.get("/ranking", async (req, res) => {
    const { username, score } = req.body;
    
    const scores = await Users.findAll({
        limit: 10 ,
        order: [['score', 'DESC']], /**Absteigend nach Score sortieren */
        attributes: {exclude: ['password', 'id', 'permission', 'createdAt', 'updatedAt']}
    })

    res.json(scores);
})

router.put('/changepassword', validateToken, async (req, res) => {
    const {oldPassword, newPassword}  = req.body

    const user = await Users.findOne({
        where: { username: req.user.username }
    })

    bcrypt.compare(oldPassword, user.password).then(async (match) => {

        if (!match) res.json({error: "Wrong Password Entered!"});

        else {bcrypt.hash(newPassword, 10).then((hash) => {
            Users.update({password: hash}, {where: {
                username: req.user.username
            }})
            res.json("Passwort wurde geändert!");
        });
        }
    });

});

router.put('/changerole', async (req, res) => {
    const {username, role}  = req.body

    await Users.findOne({
        where: { username: username }
    })

    await Users.update({role: role}, {where: {
        username: username
    }})
    res.json("hallo")

});


module.exports = router;