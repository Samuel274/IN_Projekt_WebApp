const express = require('express');
const router = express.Router();
const { Users } = require('../models');
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
  
    if (!user) res.json({ error: "User Doesn't Exist" });
  
    bcrypt.compare(password, user.password).then(async (match) => {
      if (!match) res.json({ error: "Wrong Username And Password Combination" });
  
      const accessToken = sign(
        { username: user.username, id: user.id },
        "importantsecret" /**Random generierten String verwenden _> mehr sicherheit */
      );
      res.json({ token: accessToken, username: username, id: user.id });
    });
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


module.exports = router;