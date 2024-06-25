import styled from "styled-components";

const FindRecipeButton = styled.div`
    background-color: #4CAF50; 
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
    background-color: #45a049;
    }

    &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    }
`;

export default FindRecipeButton;