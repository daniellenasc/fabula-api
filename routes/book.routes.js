const express = require("express");

const router = express.Router();

const BookModel = require("../models/Book.model");

//CRUD

//CREATE
router.post("/create-book", async (req, res) => {
  try {
    const createdBook = await BookModel.create(req.body);
    return res.status(201).json(createdBook);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//READ
//Read all coffees
router.get("/all-books", async (req, res) => {
  try {
    const allBooks = await BookModel.find({});
    return res.status(200).json(allBooks);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//Read one book
router.get("/book/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookModel.findOne({ _id: id });
    return res.status(200).json(book);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//UPDATE
router.patch("/edit-book/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await BookModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    return res.status(200).json(updatedBook);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

//DELETE
router.delete("/delete-book/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await BookModel.deleteOne({ _id: id });
    return res.status(200).json(deletedBook);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

module.exports = router;
