import React from "react";
import "./App.css";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./Components/Pages/Home.jsx";
import RecipeInfo from "./Components/RecipeInfo.jsx";
import Logo from "./Components/Logo.jsx";




function App() {
    return (
      <BrowserRouter>
        <div>
          <Logo />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes/:id" element={<RecipeInfo />} />
          </Routes>
        </div>
      </BrowserRouter>
  );

}

export default App;




