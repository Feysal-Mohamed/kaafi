import { useEffect, useState } from "react";
import RecipeDetails from "./RecipeDetails";

 function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
 
  useEffect(() => {
    async function fetchRecipes() {
      const res = await fetch("https://dummyjson.com/recipes");
      const data = await res.json();
      setRecipes(data.recipes);
    }

    fetchRecipes();
  }, []);

  // 👉 If recipe selected → show details page
  if (selectedRecipe) {
    return (
      <RecipeDetails
        recipe={selectedRecipe}
        goBack={() => setSelectedRecipe(null)}
      />
    );
  }

  // 👉 Main page
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="rounded-xl bg-white shadow-md overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="mb-2 text-lg font-bold">{recipe.name}</h2>

              <p className="text-sm text-gray-600 mb-4">
                {recipe.ingredients.slice(0, 3).join(", ")}...
              </p>

              <button
                onClick={() => setSelectedRecipe(recipe)}
                className="w-full rounded-lg bg-orange-500 py-2 text-white hover:bg-orange-600"
              >
                See More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default  App