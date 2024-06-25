import React, {useState} from 'react';
import Search from "./Search.jsx";
import {v4 as uuidv4} from "uuid";
import Ingredient from "./Ingredient.js";
import FindRecipeButton from "./FindRecipeButton.jsx";
import { fetchRecipesByIngredients } from '../../api/recipeAPI.js';
import RecipeList from "../RecipeList.jsx";


uuidv4();

function SearchWrapper() {
  
    const [ingredients, setIngredients] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const addIngredient = (ingredient) => {
        setIngredients(currentIngredients => [
            ...currentIngredients, 
            {id: uuidv4(), task: ingredient, isEditing: false}
        ]);
        
    };

    const deleteIngredient = (id) => {
        setIngredients(ingredients.filter(ingredient => ingredient.id !== id))
    }

    const findRecipes = async () => {
        setLoading(true);
        setError(null);
        console.log('Searching for recipes...');

        try {
            const ingredientNames = ingredients.map(ingredient => ingredient.task);
            console.log('API call with ingredients:', ingredientNames);
            const recipesData = await fetchRecipesByIngredients(ingredientNames);
            console.log('Recipes found:', recipesData);
            setRecipes(recipesData);
            console.log('Recipes set in state.');
        } catch (e) {
            console.error('Error occurred while fetching recipes:', e);
            setError(e.response ? e.response.data.message : e.message);
        }

        setLoading(false);
    }; 

  return (
    <div className = "searchWrapper">
        <Search addAnotherIngredient = {addIngredient} />
        {ingredients.map ((ingredient) => 
        (
            <Ingredient single_ingredient={ingredient} key={ingredient.id} deleteIngredient = {deleteIngredient} /> )
        )} 
        
        <FindRecipeButton onClick = {findRecipes} disabled = {loading}> {loading ? "Loading..." : "Find Recipes"} </FindRecipeButton>
        <RecipeList recipes={recipes} />
      
    </div>
  )
}

export default SearchWrapper;
