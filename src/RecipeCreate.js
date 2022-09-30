import React, { useState } from "react";

function RecipeCreate({ makeRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialForm = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [dataForm, setDataForm] = useState({ ...initialForm });

  const handleChange = (evt) => {
    setDataForm({ ...dataForm, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    makeRecipe(dataForm);
    setDataForm({ ...initialForm });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name"></label>
              <input
                id="name"
                type="text"
                name="name"
                value={dataForm.name}
                onChange={handleChange}
                required
                placeholder="Name"
                autoFocus
              ></input>
            </td>
            <td>
              <label htmlFor="cuisine"></label>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                value={dataForm.cuisine}
                onChange={handleChange}
                required
                placeholder="Cuisine"
              ></input>
            </td>
            <td>
              <label htmlFor="photo"></label>
              <input
                id="photo"
                type="text"
                name="photo"
                value={dataForm.photo}
                onChange={handleChange}
                required
                placeholder="URL"
              ></input>
            </td>
            <td>
              <label htmlFor="ingredients"></label>
              <textarea
                id="ingredients"
                name="ingredients"
                value={dataForm.ingredients}
                onChange={handleChange}
                required
                placeholder="Ingredients"
              ></textarea>
            </td>
            <td>
              <label htmlFor="preparation"></label>
              <textarea
                id="preparation"
                name="preparation"
                value={dataForm.preparation}
                onChange={handleChange}
                required
                placeholder="Preparation"
              ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;