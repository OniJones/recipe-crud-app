import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  const createRecipe = (newRecipe) => {
    setRecipes((currentRecipes) => [...currentRecipes, newRecipe]);
  };

  const deleteRecipe = (indexToDelete) => {
    setRecipes((currentRecipes) => {
      return currentRecipes.filter((_, index) => index !== indexToDelete);
    });
  };

  const deleteRecipe2 = (indexToDelete) => {
    const array = [...recipes];
    array.splice(indexToDelete, 1);
    setRecipes(array);
  };

  // console.log(recipes);
  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipesArray={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate makeRecipe={createRecipe} />
    </div>
  );
}

export default App;