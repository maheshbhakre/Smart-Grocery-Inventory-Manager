const prisma = require("../config/prisma");

const createItem = async (req, res) => {
  try {
    const {
      name,
      category,
      quantity,
      unit,
      minStockLevel,
      expiryDate
    } = req.body;

    const item = await prisma.groceryItem.create({
      data: {
        name,
        category,
        quantity,
        unit,
        minStockLevel,
        expiryDate: expiryDate
          ? new Date(expiryDate)
          : null,
        userId: req.user.id
      }
    });

    res.status(201).json({
      success: true,
      item
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

const getItems = async (req, res) => {
  try {
    const items = await prisma.groceryItem.findMany({
      where: {
        userId: req.user.id
      }
    });

    res.json({
      success: true,
      count: items.length,
      items
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = {
  createItem,
  getItems
};