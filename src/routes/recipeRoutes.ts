import { Router } from 'express';
import {getAllRecipes,createRecipe, getRecipe , updateRecipe, deleteRecipe} from '../controllers/recipeController'

const router = Router();
router.get('/', getAllRecipes);
router.get('/:recipeId', getRecipe);
router.put('/:recipeId', updateRecipe);
router.delete('/:recipeId', deleteRecipe);
router.post('/', createRecipe);
export default router;