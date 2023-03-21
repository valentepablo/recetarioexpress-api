const recipeModel = require('../models/Recipes');
const userModel = require('../models/Users');

const getRecipes = async (req, res) => {
  try {
    const recipes = await recipeModel
      .find({})
      .populate({ path: 'createdBy', select: ['username'] });

    res.status(200).json({ recipes });
  } catch (error) {
    res.json(error);
  }
};

const createRecipe = async (req, res) => {
  try {
    const recipe = await recipeModel.create(req.body);

    res.json({ recipe });
  } catch (error) {
    res.json(error);
  }
};

const getSingleRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await recipeModel.findById(id);

    if (recipe === null) {
      return res.status(404).json({ response: 'No se encontró ninguna receta con este ID' });
    }

    res.status(200).json(recipe);
  } catch (error) {
    res.json(error);
  }
};

const updateRecipe = async (req, res) => {
  try {
    const { id: recipeID } = req.params;
    const recipe = await recipeModel.findByIdAndUpdate(recipeID, req.body, {
      returnDocument: 'after',
    });

    if (recipe === null) {
      return res.status(404).json({ response: 'No se encontró ninguna receta con este ID' });
    }

    res.status(200).json(recipe);
  } catch (error) {
    res.json(error);
  }
};

const saveRecipe = async (req, res) => {
  try {
    const { recipeID, userID } = req.body;
    const recipe = await recipeModel.findById(recipeID);
    const user = await userModel.findById(userID);

    if (user.savedRecipes.includes(recipeID)) {
      return res.json({ response: 'Esta receta ya está guardada.' });
    }

    user.savedRecipes.push(recipe);
    await user.save();

    res
      .status(200)
      .json({ response: 'Receta guardada con exito!', savedRecipes: user.savedRecipes });
  } catch (error) {
    res.json(error);
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const { id: recipeID } = req.params;
    const recipe = await recipeModel.findByIdAndDelete(recipeID);

    res.status(200).json({ response: 'Receta eliminada con exito!', recipe: recipe });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  getRecipes,
  createRecipe,
  getSingleRecipe,
  updateRecipe,
  saveRecipe,
  deleteRecipe,
};
