"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRecipe = exports.updateRecipe = exports.getRecipe = exports.createRecipe = exports.getAllRecipes = void 0;
const recipe_1 = require("../models/recipe");
const getAllRecipes = async (req, res, next) => {
    let recipes = await recipe_1.Recipe.findAll();
    res.status(200).json(recipes);
};
exports.getAllRecipes = getAllRecipes;
const createRecipe = async (req, res, next) => {
    let newRecipe = req.body;
    if (newRecipe.recipe) {
        let created = await recipe_1.Recipe.create(newRecipe);
        res.status(201).json(created);
    }
    else {
        res.status(400).send();
    }
};
exports.createRecipe = createRecipe;
const getRecipe = async (req, res, next) => {
    let recipeId = req.params.recipeId;
    let recipeFound = await recipe_1.Recipe.findByPk(recipeId);
    if (recipeFound) {
        res.status(200).json(recipeFound);
    }
    else {
        res.status(404).json();
    }
};
exports.getRecipe = getRecipe;
const updateRecipe = async (req, res, next) => {
    let recipeId = req.params.recipeId;
    let newRecipe = req.body;
    let recipeFound = await recipe_1.Recipe.findByPk(recipeId);
    if (recipeFound && recipeFound.recipeId == newRecipe.recipeId
        && newRecipe.recipe && newRecipe) {
        await recipe_1.Recipe.update(newRecipe, {
            where: { recipeId: recipeId }
        });
        res.status(200).json();
    }
    else {
        res.status(400).json();
    }
};
exports.updateRecipe = updateRecipe;
const deleteRecipe = async (req, res, next) => {
    let recipeId = req.params.recipeId;
    let recipeFound = await recipe_1.Recipe.findByPk(recipeId);
    if (recipeFound) {
        await recipe_1.Recipe.destroy({
            where: { recipeId: recipeId }
        });
        res.status(200).json();
    }
    else {
        res.status(404).json();
    }
};
exports.deleteRecipe = deleteRecipe;
