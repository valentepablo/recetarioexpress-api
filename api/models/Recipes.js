const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  veggie: {
    type: Boolean,
    required: true,
  },
  ingredients: [
    {
      type: String,
      required: true,
    },
  ],
  instructions: [
    {
      type: String,
      required: true,
    },
  ],
  image: {
    type: String,
    required: true,
  },
  cookingTime: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
});

const recipeModel = mongoose.model('recipe', RecipeSchema);

module.exports = recipeModel;
