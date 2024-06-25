import { fetchRecipesByIngredients } from '../api/recipeAPI';


export const getRecipes = async (ingredients) => {
    try {
        
        const response = await fetchRecipesByIngredients(ingredients);
        return response.data;
    } catch (e) {
        console.error('Something went wrong while fetching the recipes', e);
        throw e; 
    }
};
