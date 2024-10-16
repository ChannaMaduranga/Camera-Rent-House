const express = require("express");
const Item = require("../models/itemModel"); // Correctly import the Item model
const itemRouter = express.Router();
const multer = require("multer");
const path = require("path");
// import express  from 'express';

// Set up Multer storage for image uploads
const storage = multer.diskStorage({
  destination: "./../src/assets/uploads/", // Change to your desired upload directory
  filename: (req, file, cb) => {
    cb(null, file.originalname, path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

// Fetch items from the database
itemRouter.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find(); // Use 'Item' model to query the collection
    // console.log("Retrieved items:", items); // Log the items for debugging
    return res.json(items); // Send the retrieved items as a JSON response
  } catch (error) {
    console.error("Error fetching items:", error); // Log the error for debugging
    return res
      .status(500)
      .json({ message: "Error fetching items", error: error.message });
  }
});

//get a item data using id
itemRouter.get("/api/items/:id", async (req, res) => {
  try {
    const itemId = req.params.id; // Get the item ID from the URL parameter
    const item = await Item.findById(itemId); // Find the item by its _id

    if (!item) {
      return res.status(404).json({ message: "Item not found" }); // If the item is not found, return a 404 error
    }

    return res.status(200).json(item); // Send the found item as a JSON response
  } catch (error) {
    console.error("Error fetching item:", error); // Log the error
    return res
      .status(500)
      .json({ message: "Error fetching item", error: error.message }); // Send an error response
  }
});

//Add items to items table
itemRouter.post("/api/items", upload.single("image"), async (req, res) => {
  try {
    const {category, name, price, description } = req.body;
    // Initialize updateData object
    let updateData = { category, name, price, description };

    // If an image is uploaded, add it to the update data
    if (req.file) {
      updateData.image = `/src/assets/uploads/${req.file.filename}`; // Save image path to the database
    }

    // Create a new item instance
    const newItem = new Item(updateData); // Use updateData here

    // Save the new item to the database
    await newItem.save();

    return res
      .status(201)
      .json({ message: "Item added successfully", newItem });
  } catch (error) {
    console.error("Error adding item:", error);
    return res
      .status(500)
      .json({ message: "Error adding item", error: error.message });
  }
});


//delete item

itemRouter.delete("/api/items/:id", async (req, res) => {
  try {
    const itemId = req.params.id; // Get the item ID from the URL parameter
    const deletedItem = await Item.findByIdAndDelete(itemId); // Delete the item by its _id

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" }); // If the item is not found, return a 404 error
    }

    return res
      .status(200)
      .json({ message: "Item deleted successfully", deletedItem }); // Send success response
  } catch (error) {
    console.error("Error deleting item:", error); // Log any errors
    return res
      .status(500)
      .json({ message: "Error deleting item", error: error.message }); // Send an error response
  }
});

itemRouter.put("/api/items/:id", upload.single("image"), async (req, res) => {
  try {
    const itemId = req.params.id; // Get the item ID from the URL parameter
    const { category, name, price, description } = req.body;

    // If an image is uploaded, add it to the update data
    let updateData = { category, name, price, description };
    if (req.file) {
      updateData.image = `/src/assets/uploads/${req.file.filename}`; // Save image path to the database
    }

    // Find the item by ID and update it with new data
    const updatedItem = await Item.findByIdAndUpdate(
      itemId,
      updateData, // New data
      { new: true, runValidators: true } // Return the updated document and run schema validators
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" }); // If the item is not found, return 404
    }

    return res
      .status(200)
      .json({ message: "Item updated successfully", updatedItem }); // Send success response
  } catch (error) {
    console.error("Error updating item:", error); // Log the error
    return res
      .status(500)
      .json({ message: "Error updating item", error: error.message }); // Send an error response
  }
});

module.exports = itemRouter;
