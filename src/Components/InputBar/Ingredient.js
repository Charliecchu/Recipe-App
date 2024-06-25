import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';


function Ingredient({single_ingredient, deleteIngredient}) {
  return (
    <div className = "Ingredient">
      <p>{single_ingredient.task}</p>
      <div>
        <DeleteIcon onClick = {() => {
            deleteIngredient(single_ingredient.id)
        }} />
      </div>

    </div>
  )
}

export default Ingredient
