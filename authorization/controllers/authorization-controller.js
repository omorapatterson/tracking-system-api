jwt = require('jsonwebtoken');

exports.auth = (req, res) => {
    try {
        let userIdPassword = req.body.userName + req.body.password;
        req.body = userIdPassword;
        let token = jwt.sign(req.body, "jwtSecret");
        res.status(200).send({jwtToken: token});
    } catch (err) {
        res.status(500).send({errors: err});
    }
};
