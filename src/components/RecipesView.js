import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import {useLocation, useParams} from 'react-router-dom';
import { titleCaps, trunc, setCopiedLink, getSlug } from '../utils';


const RecipeIngredients = ({ ingredients, servings, headerPic, isSmallView }) => {
    return (
        <div className="col-xs-12 col-lg-6 mt-5">
            <div className="row">
                <div className="col-xs-12 text-center">
                    {headerPic && (
                        <img
                            className="br20 m-3"
                            src={`/assets/recipes/${headerPic}`}
                            style={{ height: isSmallView ? 'auto' : '300px', maxWidth: '25em', objectFit: 'cover' }}
                            alt="Recipe Header"
                        />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <ul>
                        {ingredients && ingredients.map((ingredient, index) => (
                            <li key={index}>
                                <h4 className="text-white">{ingredient}</h4>
                            </li>
                        ))}
                    </ul>
                    {servings && (
                        <ul>
                            <div className="text-white mt-2">(makes: {servings})</div>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )};

    const RecipeSteps = ({ steps, isSmallView }) => {
        return (
            <div className="col-xs-12 col-lg-6" style={{ overflowY: 'auto' }}>
                <ol style={{ fontWeight: 'bold' }} className="text-white">
                    {steps && steps.map((step, index) => (
                        <li key={index}>
                            <h4>{step.instruction}</h4>
                            {step.pic && (
                                <img
                                    className="br20"
                                    src={`/assets/recipes/${step.pic}`}
                                    style={{ height: isSmallView ? 'auto' : '150px', objectFit: 'cover' }}
                                    alt={`Step ${index + 1}`}
                                />
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        );
    };

// RelatedRecipes Component
    const RelatedRecipes = ({ relatedRecipes, onRecipeClick }) => {
        if (!relatedRecipes || relatedRecipes.length === 0) {
            return null;
        }
        return (
            <div className="row mb-5">
                <div className="col-xs-12">
                    <hr />
                </div>
                <div className="col-xs-12">
                    <h4>Related Recipes</h4>
                </div>
                {relatedRecipes.map((rr, index) => (
                    <div key={index} className="col-xs-6 col-lg-4 cursPoint" onClick={() => onRecipeClick(rr)}>
                        <a>{titleCaps(rr)}</a>
                    </div>
                ))}
            </div>
        );
    };

// FeaturedRecipe Component ( part of renderMainContent)
const FeaturedRecipe = ({ recipe, assembleAndCopy, isSmallView }) => {
    if (!recipe) {
        return <div className="col-xs-12 text-white"><h3>Select a Recipe</h3></div>;
    }
    return (
        <div className="col-xs-12 col-lg-9" id={recipe.name.toLowerCase().replace(/ /g, '-')}>
            <div className="row">
                <div className="col-xs-12 row text-white">
                    <div className="row">
                        <div className="col-xs-12 col-lg-4 text-white cursPoint text-center button-group">
                            <button className="btn btn-light btn-xs" onClick={() => assembleAndCopy(recipe)}>
                                <i className="fa fa-copy"></i> <b>Recipe</b>
                            </button>
                            <button className="btn btn-info btn-xs" onClick={(event) => {
                                event.stopPropagation();
                                const location = window.location;
                                const base = location.origin + location.pathname;
                                const link = setCopiedLink('recipes' ,recipe.name);
                                navigator.clipboard.writeText(link)
                                    .then(() => console.log('Link copied to clipboard ' + link))
                                    .catch(err => console.error('Failed to copy link: ', err));
                            }}>
                                <i className="fa fa-link"></i> <b>Link</b>
                            </button>
                        </div>
                        <div className="col-xs-12 col-lg-8 text-center">
                            <h3>{titleCaps(recipe.name)}</h3>
                        </div>
                        <div className="col-xs-12 small-hide">
                            {recipe.notes && <h5>{titleCaps(recipe.notes)}</h5>}
                        </div>

                        <div className="col-xs-12 bb2 mb-2" style={{ borderBottom: '2px solid white' }}></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <RecipeIngredients
                    ingredients={recipe.ingredients}
                    servings={recipe.servings}
                    headerPic={recipe.header_pic}
                    isSmallView={isSmallView}
                />
                <RecipeSteps steps={recipe.steps} isSmallView={isSmallView} />
            </div>
            <RelatedRecipes relatedRecipes={recipe.related_recipes} onRecipeClick={(name) => {/* Implement set featured recipe */}} />
        </div>
    );
};

const RecipesView = () => {
    const { recipeId } = useParams(); // Get the dynamic recipeId from the URL
    const [recipes, setRecipes] = useState([]);
    const [recipe, setRecipe] = useState(null);
    const [featuredRecipe, setFeaturedRecipe] = useState(null);
    const [isSmallView, setIsSmallView] = useState(window.innerWidth <= 400);
    const [collapseNav, setCollapseNav] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true);
            setError(null);
            try {
                // Use an absolute path from the public directory
                const response = await fetch('/pageData/recipes.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                let recipeData = data.data;

                recipeData.reverse();
                setRecipes(recipeData);
            } catch (e) {
                setError(e);
                console.error("Error fetching recipes:", e);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []); // Fetch recipes once on component mount

    useEffect(() => {
        if (!loading && recipes.length > 0) {
            if (recipeId) {
                const foundRecipe = recipes.find(recipe =>
                    recipeId === getSlug(recipe.name)
                );
                setFeaturedRecipe(foundRecipe || recipes[0]); // Default to first if slug not found
            } else {
                setFeaturedRecipe(recipes[0]); // Set initial featured recipe if no slug in URL
            }
        }
    }, [loading, recipes, recipeId]);

    const handleRecipeClick = (recipe) => {
        let path = `/recipes/${recipe.slug || getSlug(recipe.name)}`;
        setFeaturedRecipe(recipe);
        window.history.pushState({}, '', path);
    };

    const assembleAndCopyRecipeSummary = (recipe) => {
        if (!recipe || !recipe.ingredients || !recipe.steps) {
            return;
        }
        const ingredients = `INGREDIENTS: ${recipe.ingredients.join(', ')}`;
        const instructions = recipe.steps.map((step, index) => `(${index + 1}) ${step.instruction}`).join(' ');
        const summary = `Recipe For ${recipe.name} ${ingredients} INSTRUCTIONS: ${instructions} Courtesy of Arillian Farm [Link to recipe: ${setCopiedLink('recipes', recipe.name)}]`;
        navigator.clipboard.writeText(summary)
            .then(() => console.log('Recipe summary copied to clipboard'))
            .catch(err => console.error('Failed to copy recipe summary: ', err));
    };

    const renderMainContent = (item) => (
        <FeaturedRecipe recipe={item} assembleAndCopy={assembleAndCopyRecipeSummary} isSmallView={isSmallView} />
    );

    if (loading) {
        return <div>Loading recipes...</div>;
    }

    if (error) {
        return <div>Error loading recipes: {error.message}</div>;
    }

    return (
        <div className="container border2px br20 text-white">
            <div className="row">
                <div className="col-xs-12">
                    <h2 className="text-white">Recipes</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-lg-3" style={{ borderRight: !isSmallView ? '2px solid white' : '' }}>
                    <div className="row cursPoint">
                        <div className="col-xs-12">
                            <h3>
                                {isSmallView && (
                                    <button className="btn btn-large btn-primary" onClick={() => setCollapseNav(!collapseNav)}>
                                        <i className="fa fa-list"></i>
                                    </button>
                                )}
                            </h3>
                        </div>
                        {(!collapseNav || !isSmallView) &&
                            recipes.map((recipe) => (
                                <ListItem
                                    key={recipe.name}
                                    item={recipe}
                                    isSelected={featuredRecipe && recipe.name === featuredRecipe.name}
                                    onItemClick={handleRecipeClick}
                                    titleKey="name"
                                    thumbnailKey="header_pic"
                                    descriptionKey="notes"
                                    thumbnailPrefix="/assets/recipes/"
                                    pageBase='recipes'
                                />
                            ))}
                    </div>
                </div>
                <div className="col-xs-12 col-lg-9">
                    {renderMainContent(featuredRecipe)}
                </div>
            </div>
        </div>
    );
};

export default RecipesView;