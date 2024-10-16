const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
    {
 // Add id field
        category: { type: String, required: true },
        name: { type: String, required: true, trim: true },
        price: { type: String, required: true },
       
        description :{ type: String, required: true },
        image: { type: String, required: true },
      },
  { versionKey: false }
);

// Ensure the model is not overwritten if already defined
const Item = mongoose.model("item", itemSchema);

module.exports = Item;
