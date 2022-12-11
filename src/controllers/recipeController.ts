import { RequestHandler } from "express";
import { allowedNodeEnvironmentFlags } from "process";
import { Recipe } from "../models/recipe";
import { User } from "../models/users";
import { verifyUser } from "../services/auth";

export const getAllRecipes: RequestHandler = async (req, res, next) => {
  let user: User | null = await verifyUser(req);

  if (!user) {
    return res.status(403).send();
 
  }
  let refcipeUserId=user.userId
  console.log(refcipeUserId)
  let recipes = await Recipe.findAll({where:{userId: refcipeUserId}});
  res.status(200).json(recipes);
};

export const createRecipe: RequestHandler = async (req, res, next) => {
  let user: User | null = await verifyUser(req);

  if (!user) {
    return res.status(403).send();
  }

  console.log(user);

  let newRecipe: Recipe = req.body;
  newRecipe.userId = user.userId;
  if (newRecipe.title) {
    let recipe = await Recipe.findOrCreate({
      where: { id: newRecipe.userId },

      defaults: newRecipe,
    });

    

    res.status(201).json(recipe);
  } else {
    res.status(400).send();
  }
};

export const getRecipe: RequestHandler = async (req, res, next) => {
  //Authenticate user
  let user: User | null = await verifyUser(req);
  if (!user) {
    return res.status(403).send();
  }

  //getRecipe
  let recipeId = req.params.savedRecipeId;
  let recipeFound = await Recipe.findByPk(recipeId);
  if (recipeFound) {
    res.status(200).json(recipeFound);
    console.log(recipeFound)
  } else {
    res.status(404).json();
  }
};

export const updateRecipe: RequestHandler = async (req, res, next) => {
  //Authenticate user
  let user: User | null = await verifyUser(req);
  if (!user) {
    return res.status(403).send();
  }

  //updateRecipe
  let recipeId = req.params.savedRecipeId;
  let newRecipe: Recipe = req.body;

  let recipeFound = await Recipe.findByPk(recipeId);

  if (
    recipeFound &&
    recipeFound.savedRecipeId == newRecipe.savedRecipeId &&
    newRecipe.title &&
    newRecipe
  ) {
    await Recipe.update(newRecipe, {
      where: { savedRecipeId: recipeId },
    });
    res.status(200).json();
  } else {
    res.status(400).json();
  }
};

export const deleteRecipe: RequestHandler = async (req, res, next) => {
  let recipeId = req.params.savedRecipeId;
  let recipeFound = await Recipe.findByPk(recipeId);

  if (recipeFound) {
    await Recipe.destroy({
      where: { savedRecipeId: recipeId },
    });
    res.status(200).json();
  } else {
    res.status(404).json();
  }
};
