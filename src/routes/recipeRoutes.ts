import { Router } from 'express';
import {getAllRecipes,createRecipe, getRecipe , updateRecipe, deleteRecipe} from '../controllers/recipeController'

const router = Router();
router.get('/', getAllRecipes);
router.get('/:savedRecipeId', getRecipe);
router.put('/:savedRecipeId', updateRecipe);
router.delete('/:savedRecipeId', deleteRecipe);
router.post('/', createRecipe);
export default router;