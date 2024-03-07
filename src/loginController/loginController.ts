const bodyParser = require("body-parser");

var router = require("express").Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(bodyParser.raw());

router.get("/get", async function (req, res) {
    res.status(200).send({data:"Success"})
});

module.exports = router;