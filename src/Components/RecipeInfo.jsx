import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const RecipeInfo = () => {
  let params = useParams();
  const [details, setDetails] = useState({extendedDetails : []});
  const [activeTab, setActiveTab] = useState("instructions");

  const convertToOrderedList = (text) => {
    const instructions = text.split('. '); 
    const listItems = instructions.map((instruction, index) =>
      instruction ? `<li key=${index}>${instruction}</li>` : ''
    ).join('');
    return `<ol>${listItems}</ol>`;
  };
  

  useEffect(() => {
    const getDetails = async () => {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const detailsData = await data.json();
      console.log(detailsData);
      const transformedInstructions = convertToOrderedList(detailsData.instructions);  
      setDetails({ ...detailsData, instructions: transformedInstructions });
      console.log(detailsData);
    };
    getDetails();
  }, [params.id]);

  return (
    <DetailFormat>
      <div style = {{ flex: 1 }}>
        <RecipeName>{details.title}</RecipeName>
        <img src = {details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className = {activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className = {activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div style = {{ marginTop: 60 }}>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <ol className = "innerList" dangerouslySetInnerHTML={{ __html: details.instructions }}></ol>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ol className = "ingredientList" style = {{ marginTop: 60 }}>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ol>
        )}
      </Info>
    </DetailFormat>
  );
};

const DetailFormat = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  gap: 5rem;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
    // margin-left: 20px;
    margin-top: 3rem;
  }
  h3 {
    font-weight: 500;
    margin-left: 40px
  }
  ol {
    padding-left: 0;
  }
  .innerList {
    padding-left: 45px;
  }

  ol>.innerList {
    list-style-type: decimal;
    // padding-left: 40px;
  }
  .ingredientList {
    margin-left: 4rem;
  }


`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  margin-left: 40px;
  width: 100%;
`;

const Info = styled.div`
  flex: 1;
`;

const RecipeName = styled.div `
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-style: normal;
  margin-bottom: 2rem;
  font-size: 2rem;
`

export default RecipeInfo;