const menuService = require("./service");

exports.addCategory = async (req, res) => {
  try {
    const categoryData = req.body;
    console.log("categoryData===>>>", categoryData);
    const newCategory = await menuService.createCategory(categoryData);
    return res.status(201).json({
      message: "Category created successfully",
      category: newCategory,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.addItem = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const itemData = req.body;
    if (req.file) {
      itemData.photo = req.file.path; // Save the file path to itemData
    }
    const newItem = await menuService.createItem(categoryId, itemData);
    return res
      .status(201)
      .json({ message: "Item added successfully", item: newItem });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await menuService.getAllCategories();
    return res.status(200).json({ categories });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get menu items by category ID
exports.getItemsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const category = await menuService.getCategoryItems(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({ items: category.items });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
