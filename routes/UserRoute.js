const express = require("express");

const UserController = require("../controllers/UserController");
const { signupValidator, validatorResult, signinValidator } = require("../middlewares/validator");

const router = express.Router()

router.post("/register", signupValidator, validatorResult, UserController.create);
router.post("/login",signinValidator, validatorResult, UserController.find);


module.exports = router