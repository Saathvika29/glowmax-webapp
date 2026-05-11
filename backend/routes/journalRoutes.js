const express = require("express");

const router = express.Router();

const {
  addJournal,
  getJournals
} = require("../controllers/journalController");

router.post("/add", addJournal);

router.get("/:userId", getJournals);

module.exports = router;