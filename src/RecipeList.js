import React from "react";
import { RecipeListItem } from "./RecipeListItem";

function RecipeList({ recipesArray, deleteRecipe }) {
  // console.log(recipesArray[0]);
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  if(recipesArray === 0) return null;
  const recipeList = recipesArray.map((recipe, index) => {
    // console.log(recipe,index,deleteRecipe);
    return (
      <RecipeListItem
        key={index}
        {...recipe}
        deleteRecipe={() => deleteRecipe(index)}
      />
    );
  });

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{recipeList}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;