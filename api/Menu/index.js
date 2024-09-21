const { Schema, default: mongoose } = require("mongoose");
const { dbConn } = require("../../system/db/mongo");

const itemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  photo: { type: String },
});

const categorySchema = new Schema(
  {
    name: { type: String, required: true },
    items: [itemSchema],
  },
  { timestamps: true }
);

const Category = dbConn.model("Category", categorySchema, "Categorys");

module.exports = {
  Category,
};
