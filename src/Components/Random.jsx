import React, {useState} from 'react';
import { useEffect } from 'react';
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import {Link} from "react-router-dom";


function Random() {
  
  const [random, setRandom] = useState([]);
  
  useEffect(() => {
    getRandom();
  },[]);

  const getRandom = async () => {
    const RandomAPI = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=25`);
    const data = await RandomAPI.json();
    setRandom(data.recipes);

  }
  
    return (
        <div>
          <RandomWrapper>
              <h3>Random Dishes</h3>
              <Splide options = 
                {
                { perPage: 4,
                  gap: "5rem",
                  pagination: false,
                  // arrows: false,
                  drag: "free",
                  fixedWidth: "200px",
                }
                }>
                {random.map(recipe => {
                  return (
                    <SplideSlide>
                      <RandomDisplay>
                        <Link to = {"/recipes/" + recipe.id}>
                          <p>{recipe.title}</p>
                          <img src = {recipe.image} alt = {recipe.title} />
                          <Gradient />
                        </Link>
                      </RandomDisplay>
                    </SplideSlide>
                  );
                })}
                </Splide>
                
              </RandomWrapper>

        </div>
    )
}

const RandomWrapper = styled.div`
  margin: 3rem 0rem;
`
const RandomDisplay = styled.div`
  position: relative;
  height: 15rem;
  border-radius: 4px;
  overflow: hidden;
  width: 200px;

  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    object-fit: contain;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: -15%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 500;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

  }
`;

const Gradient = styled.div `
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export default Random;
