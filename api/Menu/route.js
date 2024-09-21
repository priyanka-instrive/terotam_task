const express = require("express");
const router = express.Router();
const { celebrate } = require("celebrate");
const schema = require("./schema.js");
const { upload } = require("../../system/middleware/upload.js");

const controller = require("./controller.js");

router.post(
  "/category",
  celebrate(schema.categoryValidationSchema, schema.options),
  controller.addCategory
);
router.post(
  "/category/:categoryId/item",
  upload.single("file"),
  celebrate(schema.itemValidationSchema, schema.options),
  controller.addItem
);

// Get all categories
router.get("/get_all_category", controller.getCategories);

// Get menu items by category
router.get("/category/:categoryId/items", controller.getItemsByCategory);

module.exports = router;
