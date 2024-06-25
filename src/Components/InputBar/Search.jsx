
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

function Search({addAnotherIngredient}) {
   
    const [input, setInput] = useState("");


    const EnterKey = (event) => {
        event.preventDefault();
        addAnotherIngredient(input);
        setInput("");
    };

    return (
        <form className = "searchComponent" onSubmit = {EnterKey}>
            
            <input onChange = {(key) => setInput(key.target.value)} placeholder = "Add Ingredient"
            type="text" value = {input} className = "searchInput"/>
            <button type = "submit" className = "ingredientButton"><SearchIcon style = {{color: "white"}} sx = {{fontSize: 12 }}/></button>
            
        </form>
    );
}



export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;



export default Search;



