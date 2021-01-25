const { findByIdAndUpdate } = require("../models/Stuff");
const Stuff = require("../models/Stuff");

exports.create = async (req, res) => {
  console.log(req.body);
  const { name, price, qty } = req.body;

  try {
    let stuff = new Stuff();
    stuff.name = name;
    stuff.price = price;
    stuff.qty = qty;

    await stuff.save();

    res.json({
      successMessage: `${name} was created`,
      stuff,
    });
  } catch (err) {
    console.log(err, "stuffController.create error");
    res.status(500).json({
      errorMessage: `Please try again later`,
    });
  }
};

exports.readAll = async (req, res) => {
  try {
    const stuffs = await Stuff.find({});

    res.status(200).json({
      stuffs: stuffs,
    });
  } catch (err) {
    console.log(err, "stuffController.readAll error");
    res.status(500).json({
      errorMessage: `Please try again later`,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const stuffId = req.params.stuffId;
    const deletedStuff = await Stuff.findByIdAndDelete(stuffId);

    res.json(deletedStuff);
  } catch (err) {
    console.log(err, "stuffController.delete error");
    res.status(500).json({
      errorMessage: `Please try again later`,
    });
  }
};

exports.readOne = async (req, res) => {
  try {
    const stuffId = req.params.stuffId;
    const stuff = await Stuff.findById(stuffId);

    res.status(200).json({
      stuff: stuff,
    });
  } catch (err) {
    console.log(err, "stuffController.readOne error");
    res.status(500).json({
      errorMessage: `Please try again later`,
    });
  }
};

exports.update = async (req, res) => {
  const { name, price, qty } = req.body;
  const data = { name, price, qty };
  const stuffId = req.params.stuffId;

  try {
    const stuff = await Stuff.findByIdAndUpdate(stuffId, data);

    res.json({
      successMessage: `${name} was updated`,
      stuff,
    });
  } catch (err) {
    console.log(err, "stuffController.update error");
    res.status(500).json({
      errorMessage: `Please try again later`,
    });
  }
};
