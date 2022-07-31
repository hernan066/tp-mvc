const express = require("express");
const router = express.Router()

/* Controlador */
const mainController = require("../controllers/mainController")

/* Router */
router.get("/", mainController.home);
router.get("/about", mainController.about);


module.exports = router;