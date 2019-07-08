const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');

router.get('/', verifyToken, (req, res) => {
    res.status(200).send({
        name: "this a name",
        description: "and this a description",
        req: req.x
    });
});

module.exports = router;