const { Category } = require("./index");

// Create category
exports.createCategory = async (categoryData) => {
  const category = new Category(categoryData);
  return await category.save();
};

// Create item in a specific category
exports.createItem = async (categoryId, itemData) => {
  const category = await Category.findById(categoryId);
  if (!category) {
    throw new Error("Category not found");
  }
  category.items.push(itemData);
  return await category.save();
};

// Get all categories
exports.getAllCategories = async () => {
  return await Category.find({}, "name"); // Only return the name of each category
};

// Get menu items by category ID
exports.getCategoryItems = async (categoryId) => {
  return await Category.findById(categoryId); // Find category by ID and return the category with its items
};
