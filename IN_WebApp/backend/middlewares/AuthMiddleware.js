const {verify } = require('jsonwebtoken');

/**Middleware um zu überprüfen, ob der User angemeldet ist */

const validateToken = (req, res, next) => {
    const accessToken = req.header("accessToken");

    if (!accessToken) return res.json({error: "Benutzer ist nicht eingeloggt!"});
    
    try {
        const validToken = verify(accessToken, "importantsecret");
        req.user = validToken;
        if (validToken) {
            return next();
        }
    } catch (err) {
        return res.json({error: err});
    }
    
};

module.exports = {validateToken};