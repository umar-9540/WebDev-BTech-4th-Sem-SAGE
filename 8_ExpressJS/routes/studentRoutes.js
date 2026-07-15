const express = require("express");

const router = express.router();
const { createUser, deleteUser } = require("./contollers/studentControllers");

router.post("/:id", createUser);

module.exports = router;
