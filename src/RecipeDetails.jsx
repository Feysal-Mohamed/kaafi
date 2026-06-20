function RecipeDetails({ recipe, goBack }) {
  return (
    <div className="min-h-screen bg-white p-6">
      {/* Back Button */}
      <button
        onClick={goBack}
        className="mb-6 rounded-lg bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
      >
        ← Back
      </button>

      <div className="max-w-3xl mx-auto">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="h-80 w-full rounded-xl object-cover"
        />

        <h1 className="mt-4 text-3xl font-bold">
          {recipe.name}
        </h1>

        <p className="mt-2 text-gray-600">
          Rating: ⭐ {recipe.rating} | Cuisine: {recipe.cuisine}
        </p>

        {/* Ingredients */}
        <h2 className="mt-6 text-xl font-semibold">
          Ingredients
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          {recipe.ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* Instructions */}
        <h2 className="mt-6 text-xl font-semibold">
          Instructions
        </h2>
        <ol className="list-decimal pl-6 text-gray-700">
          {recipe.instructions.map((step, i) => (
            <li key={i} className="mb-2">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default  RecipeDetails