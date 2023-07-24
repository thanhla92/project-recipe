import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe({ name, cuisine, photo, ingredients, preparation });
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} required />
            </td>
            <td>
              <input name="photo" placeholder="URL" value={photo} onChange={(event) => setPhoto(event.target.value)} required />
            </td>
            <td>
              <input name="cuisine" placeholder="Cuisine" value={cuisine} onChange={(event) => setCuisine(event.target.value)} required />
            </td>
            <td>
              <textarea name="ingredients" placeholder="Ingredients" value={ingredients} onChange={(event) => setIngredients(event.target.value)} required />
            </td>
            <td>
              <textarea name="preparation" placeholder="Preparation" value={preparation} onChange={(event) => setPreparation(event.target.value)} required />
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
