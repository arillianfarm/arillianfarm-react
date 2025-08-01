import React, { useState, useEffect } from 'react';
import ListItem from './ListItem'; // Your existing ListItem component
import { useNavigate } from 'react-router-dom';
import { titleCaps, getSlug, setLinkWithQueryString } from '../utils';
import { Helmet } from 'react-helmet-async';
import recipeData from '../pageData/recipes.json';

const RecipeListOnlyView = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        try {
            // Create a copy of the data and reverse it to get most recent first
            const processedRecipes = [...recipeData.data].reverse();
            setRecipes(processedRecipes);
            setError(null);
        } catch (e) {
            setError(e);
            console.error("Error fetching recipes:", e);
            setRecipes([]);
        } finally {
            setLoading(false);
        }
    }, []); // Empty dependency array means this runs once on mount

    const handleRecipeClick = (recipe) => {
        // Navigate to the specific recipe's URL
        const recipeSlug = getSlug(recipe.name);
        navigate(`/recipes/${recipeSlug}`);
    };

    if (loading) {
        return <div className="container text-white">Loading recipes...</div>;
    }

    if (error) {
        return <div className="container text-white">Error loading recipes: {error.message}</div>;
    }

    return (
        <div className="container border2px br20 text-white">
            <Helmet>
                <title>All Recipes - Arillian Farm</title>
                <meta name="description" content="Browse all delicious vegetarian recipes from Arillian Farm, featuring fresh ingredients and heartwarming meals." />
            </Helmet>
            <div className="row">
                <div className="col-xs-12">
                    <h2 className="text-white">All Recipes</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12"> {/* This column will always take full width */}
                    <div className="row cursPoint">
                        {recipes.length > 0 ? (
                            recipes.map((recipe) => (
                                <ListItem
                                    key={recipe.name}
                                    item={recipe}
                                    onItemClick={handleRecipeClick} // Modified to navigate
                                    titleKey="name"
                                    thumbnailKey="header_pic"
                                    descriptionKey="notes"
                                    thumbnailPrefix="/assets/recipes/"
                                    pageBase='recipes' // Still useful for copy-link logic in ListItem
                                />
                            ))
                        ) : (
                            <div className="col-xs-12 text-white"><h3>No recipes found.</h3></div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeListOnlyView;