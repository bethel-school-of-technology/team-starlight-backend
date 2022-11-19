import { Router } from 'express';
import {getAllRecipes,createRecipe, getRecipe , updateRecipe, deleteRecipe} from '../controllers/recipeController'

const router = Router();
router.get('/', getAllRecipes);
router.get('/:id', getRecipe);
router.put('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);
router.post('/', createRecipe);
export default router;