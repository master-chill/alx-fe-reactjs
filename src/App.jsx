import { useEffect } from 'react';
import useRecipeStore from './store/recipeStore';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  // Initialize with sample recipes
  useEffect(() => {
    setRecipes([
      { 
        id: 1, 
        title: "Classic Pancakes", 
        description: "Fluffy homemade pancakes with maple syrup. Perfect for weekend breakfasts!" 
      },
      { 
        id: 2, 
        title: "Vegetable Stir Fry", 
        description: "Quick and healthy stir fry with fresh seasonal vegetables and tofu." 
      }
    ]);
  }, [setRecipes]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Recipe Sharing App</h1>
          <p className="text-gray-600">Share and discover delicious recipes with the community</p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <AddRecipeForm />
          </div>
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Community Recipes</h2>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {useRecipeStore.getState().recipes.length} recipes
              </span>
            </div>
            <RecipeList />
          </div>
        </div>
        
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>Recipe Sharing App &copy; {new Date().getFullYear()} - Built with React and Zustand</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
