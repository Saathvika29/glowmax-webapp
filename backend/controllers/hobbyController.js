const Hobby =
  require("../models/Hobby");

const addHobby = async (req, res) => {

  try {

    const {
      userId,
      hobby,
      hours
    } = req.body;

    const newHobby =
      await Hobby.create({

        userId,

        hobby,

        hours

      });

    res.status(201).json({
      message: "Hobby added",
      newHobby
    });

  } catch(error){

    res.status(500).json({
      message: error.message
    });
  }
};

const getHobbies = async (req, res) => {

  try {

    const hobbies =
      await Hobby.find({
        userId: req.params.userId
      });

    res.status(200).json(hobbies);

  } catch(error){

    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  addHobby,
  getHobbies
};