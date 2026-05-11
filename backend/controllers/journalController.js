const Journal =
  require("../models/Journal");

const addJournal = async (req, res) => {

  try {

    const { userId, content } = req.body;

    const journal =
      await Journal.create({

        userId,

        content

      });

    res.status(201).json({

      message: "Journal added",

      journal
    });

  } catch(error){

    res.status(500).json({
      message: error.message
    });
  }
};

const getJournals = async (req, res) => {

  try {

    const journals =
      await Journal.find({
        userId: req.params.userId
      });

    res.status(200).json(journals);

  } catch(error){

    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  addJournal,
  getJournals
};