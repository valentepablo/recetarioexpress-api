const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');

const {
  getRecipes,
  createRecipe,
  getSingleRecipe,
  updateRecipe,
  saveRecipe,
  deleteRecipe,
} = require('../controllers/recipes');

router.get('/', getRecipes);
router.post('/', verifyToken, createRecipe);
router.patch('/', verifyToken, saveRecipe);
router.get('/:id', getSingleRecipe);
router.patch('/:id', verifyToken, updateRecipe);
router.delete('/:id', verifyToken, deleteRecipe);

module.exports = { router };
