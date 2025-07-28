import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {recipes.map((recipe) => (
        <div 
          key={recipe.id} 
          className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{recipe.title}</h3>
            <p className="text-gray-600">{recipe.description}</p>
          </div>
        </div>
      ))}
      
      {recipes.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-500 text-lg">No recipes found. Add your first recipe!</p>
        </div>
      )}
    </div>
  );
};

export default RecipeList;
