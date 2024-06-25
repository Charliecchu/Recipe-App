import React from 'react';
import styled from "styled-components";
import SearchWrapper from "./SearchWrapper.jsx"; 
import { SearchContainer } from "./Search.jsx"; 
import "../../App.css";
import Random from "../Random.jsx";

function HomePage() {
  return (
    <div className="app">
      <SearchContainer>
        <QuoteStyle className="quote">Discover Delicious Meals Effortlessly</QuoteStyle>
        <SearchWrapper />
      </SearchContainer>
      <Random />
    </div>
  );
}

export default HomePage;

const QuoteStyle = styled.div `
    font-family: "Gwendolyn", cursive;
    font-weight: 700;
    font-style: normal;
    
`;

