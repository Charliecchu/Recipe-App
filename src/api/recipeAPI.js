import axios from 'axios';

export const fetchRecipesByIngredients = async (ingredientsArray) => {
 
    const params = { 
      apiKey: process.env.REACT_APP_API_KEY,
      ingredients: ingredientsArray.join(','),
      number: 10,
      ignorePantry: true,
    };
  
    
    console.log("Params: ", params);
  
    try {
      
      const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', { params });
      console.log('Recipes received:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw error;
    }
  };