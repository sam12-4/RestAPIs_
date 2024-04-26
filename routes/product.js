const express = require("express");
const router = express.Router();

const {getallProducts, getallProductsTesting} = require("../controllers/product")

router.route("/").get(getallProducts);
router.route("/test").get(getallProductsTesting);

module.exports = router;