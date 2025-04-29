// views/RecipeDetailView.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetailView = () => {
    const { recipeId } = useParams(); // Get the dynamic recipeId from the URL
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            setLoading(true);
            setError(null);
            try {
                // Assuming your recipe data is in a JSON file or an API
                const response = await fetch('./pageData/recipes.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                // Find the recipe that matches the recipeId (you'll need a way to uniquely identify recipes)
                const foundRecipe = data.recipes.find(recipe =>
                    recipe.slug === recipeId || recipe.name.toLowerCase().replace(/ /g, '-') === recipeId.toLowerCase() // Example matching logic
                );

                if (foundRecipe) {
                    setRecipe(foundRecipe);
                } else {
                    setError('Recipe not found.');
                }
            } catch (e) {
                setError(e);
                console.error('Error fetching recipe:', e);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [recipeId]); // Re-fetch if the recipeId in the URL changes

    if (loading) {
        return <div>Loading recipe...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!recipe) {
        return <div>Recipe not found.</div>;
    }

    return (
        <div className="recipe-detail-view">
            <h2>{recipe.name}</h2>
            {/* Display other recipe details here */}
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
        </div>
    );
};

export default RecipeDetailView;