import React from "react";

export const RecipeListItem = (recipe) => {
  //   console.log(recipe);
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo} alt="food photo" />
      </td>
      <td className="content_td">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="content_td">
        <p>{recipe.preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={recipe.deleteRecipe}>
          Delete
        </button>
      </td>
    </tr>
  );
};