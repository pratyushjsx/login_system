const router = require('express').Router();
const userController = require('../controller/userCtrl.js');
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/getAllUsers", userController.getAllUsers);

module.exports = router;