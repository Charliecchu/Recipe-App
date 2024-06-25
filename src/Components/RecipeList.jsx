import React from 'react';
import {Link} from "react-router-dom";

function RecipeList({ recipes }) {
    return (
      <div className="recipe-list">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipe">
            <h3>
            <Link to={`recipes/${recipe.id}`}>
              {recipe.title}
            </Link>
            </h3>
            <img src={recipe.image} alt={recipe.title} />
          </div>
        ))}
      </div>
    );
  }

export default RecipeList;
