const bodyParser = require("body-parser");

var router = require("express").Router();

let UserModel = require("../model/user");
let { cryptoEncode, cryptoDecode } = require("../utility/utils");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(bodyParser.raw());