import React from "react";

function Recipe({ recipe, deleteRecipe }) {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td><img src={recipe.photo} alt={recipe.name} style={{width: '100%', height: '100%', objectFit: 'scale-down'}} /></td>
      <td className="content_td"><p>{recipe.ingredients}</p></td>
      <td className="content_td"><p>{recipe.preparation}</p></td>
      <td>
        <button name="delete" onClick={() => deleteRecipe(recipe.name)}>Delete</button>
      </td>
    </tr>
  );
}

function RecipeList({ recipes, deleteRecipe }) {
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
        <tbody>
          {recipes.map((recipe) => (
            <Recipe key={recipe.name} recipe={recipe} deleteRecipe={deleteRecipe} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
