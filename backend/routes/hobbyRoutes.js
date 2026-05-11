const express = require("express");

const router = express.Router();

const {
  addHobby,
  getHobbies
} = require("../controllers/hobbyController");

router.post("/add", addHobby);

router.get("/:userId", getHobbies);

module.exports = router;