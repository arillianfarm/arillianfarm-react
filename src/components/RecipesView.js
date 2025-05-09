import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import {useLocation, useNavigate} from 'react-router-dom';
import {titleCaps, setCopiedLink, getSlug, setLinkWithQueryString} from '../utils';
import recipeData from '../pageData/recipes.json';

const RecipeIngredients = ({ ingredients, servings, headerPic, isSmallView }) => {
    if (!ingredients || ingredients.length === 0) {
        return null;
    }
    return (
        <div className="col-xs-12 col-lg-6 mt-5">
            <div className="row">
                <div className="col-xs-12 text-center">
                    {headerPic && (
                        <img
                            className="br20 m-3"
                            src={`${process.env.PUBLIC_URL||""}/assets/recipes/${headerPic}`}
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
                            <li key={`i-${index}`}>
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

const RecipeSteps = ({ fullRecipe, steps, isSmallView }) => {
    if (!fullRecipe.steps || fullRecipe.steps.length === 0) {
        return null;
    }
        return (
            <div className="col-xs-12 col-lg-6" style={{ overflowY: 'auto' }}>
                <ol style={{ fontWeight: 'bold' }} className="text-white">
                    {fullRecipe.steps && fullRecipe.steps.map((step, index) => (
                        <li key={`s-${index}`}>
                            <h4>{step.instruction}</h4>
                            {step.pic && (
                                <img
                                    className="br20"
                                    src={`${process.env.PUBLIC_URL}/assets/recipes/${step.pic}`}
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
                    <div key={`rr-${index}`} className="col-xs-6 col-lg-4 cursPoint" onClick={() => onRecipeClick(null, rr)}>
                        <a>{titleCaps(rr)}</a>
                    </div>
                ))}
            </div>
        );
    };

const FeaturedRecipe = ({ recipe, assembleAndCopy, isSmallView, handleRelatedRecipeClick }) => {
    console.log("RECIPE renderMainContent called with item:", recipe);
    if (!recipe || !recipe.name) {
        return <div className="col-xs-12 text-white"><h3>Select a Recipe</h3></div>;
    }
    console.log("RECIPE: renderMainContent: Item data looks good, proceeding with rendering details.");


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
                                const link = setLinkWithQueryString('recipes' ,recipe.name);
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
                <RecipeSteps fullRecipe={recipe} steps={recipe.steps} isSmallView={isSmallView} />
            </div>
            <RelatedRecipes
                relatedRecipes={recipe.related_recipes}
                onRecipeClick={handleRelatedRecipeClick} />
        </div>
    );
};

const RecipesView = () => {
    const [recipes, setRecipes] = useState([]);
    const [featuredRecipe, setFeaturedRecipe] = useState(null);
    const [isSmallView, setIsSmallView] = useState(window.innerWidth <= 400);
    const [collapseNav, setCollapseNav] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true); // Start loading state
        setFeaturedRecipe(null);
        try {
            // Create a copy of the data before reversing to avoid mutating the original import
            const processedRecipes = [...recipeData.data].reverse();
            setRecipes(processedRecipes); // Set the recipes state

            const params = new URLSearchParams(location.search);
            const idFromQuery = params.get('articleId');

            let initialFeaturedRecipe = null;
            if (idFromQuery) {
                // Find the recipe by slug from the processed list
                initialFeaturedRecipe = processedRecipes.find(recipe => getSlug(recipe.name) === idFromQuery);
            }

            // Set the featured recipe - default to the first one if no ID or not found
            setFeaturedRecipe(initialFeaturedRecipe || processedRecipes[0]);

            setError(null); // Clear any previous errors

            } catch (e) {
                setError(e);
                console.error("Error fetching recipes:", e);
                setRecipes([]); // Clear recipes on error
                setFeaturedRecipe(null);
            } finally {
                setLoading(false);
            }
    }, [location.search]);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallView(window.innerWidth <= 400);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array means this effect runs only on mount and cleanup on unmount


    const handleRecipeClick = (recipe, name) => {
        let nameValue = (name || recipe?.name);
        console.log("RecipesView: handleRecipeClick - Item clicked. NameValue:", nameValue);

        if (nameValue){
            // setLinkWithQueryString likely returns a full URL for copy/share purposes
            let fullUrlPath = setLinkWithQueryString('recipes', nameValue);
            console.log("RecipesView: handleRecipeClick - Generated full URL path:", fullUrlPath); // Log the full URL

            // --- Extract the path needed for navigate ---
            // Create a URL object to easily parse the full URL
            const url = new URL(fullUrlPath);

            // The path for navigate should be relative to the BrowserRouter's basename
            const basename = "/"; // This must match your BrowserRouter basename

            let pathForNavigate = url.pathname + url.search + url.hash; // Get the path, search, and hash parts

            // If the path starts with the basename, remove the basename part
            if (pathForNavigate.startsWith(basename)) {
                pathForNavigate = pathForNavigate.substring(basename.length);
            }

            // Ensure pathForNavigate starts with a slash if it became empty after removing basename
            if (pathForNavigate === "" || !pathForNavigate.startsWith('/')) {
                pathForNavigate = '/' + pathForNavigate; // Prepend slash if needed
            }
            // --- End extraction ---


            console.log("RecipesView: handleRecipeClick - Path for navigate:", pathForNavigate); // Log the path being passed to navigate

            // You still need the comparison logic to avoid navigating if already on the same page
            // The comparison should be based on the *search* part relative to the basename,
            // as the pathname will likely be the same '/recipes/'
            const currentSearch = new URLSearchParams(location.search).toString();
            const expectedNewSearch = new URLSearchParams(url.search).toString(); // Get search from the generated URL

            console.log("RecipesView: handleRecipeClick - Expected new search string (from generated URL):", expectedNewSearch);
            console.log("RecipesView: handleRecipeClick - Current location.search string:", currentSearch);


            if (currentSearch === expectedNewSearch) {
                console.warn("RecipesView: handleRecipeClick - URL query is ALREADY the same. Not navigating.");
            } else {
                console.log("RecipesView: handleRecipeClick - URL query is DIFFERENT. Navigating.");
                navigate(pathForNavigate); // <-- Pass the correctly extracted relative path to navigate
                // No need to setFeaturedRecipe here, the useEffect will detect the location.search change and update featuredRecipe
            }

        } else {
            console.warn("RecipesView: handleRecipeClick - Called with no valid nameValue.");
        }

        if (isSmallView) {
            setCollapseNav(true);
        }
    };

    const assembleAndCopyRecipeSummary = (recipe) => {
        if (!recipe || !recipe.ingredients || !recipe.steps) {
            return;
        }
        const ingredients = `INGREDIENTS: ${recipe.ingredients.join(', ')}`;
        const instructions = recipe.steps.map((step, index) => `(${index + 1}) ${step.instruction}`).join(' ');
        const summary = `Recipe For ${recipe.name} ${ingredients} INSTRUCTIONS: ${instructions} Courtesy of Arillian Farm [Link to recipe: ${setLinkWithQueryString('recipes', recipe.name)}]`;
        navigator.clipboard.writeText(summary)
            .then(() => console.log('Recipe summary copied to clipboard'))
            .catch(err => console.error('Failed to copy recipe summary: ', err));
    };

    const renderMainContent = (item) => {
        console.log("RECIPE renderMainContent called with item:", item);
        if (!item || !item.name) {
            console.log("RECIPE: renderMainContent: Item is null/undefined, rendering placeholder.");
            return <div className="col-xs-12 text-white"><h3>Select a Recipe</h3></div>;
        }
        console.log("RECIPE: renderMainContent: Item data looks good, proceeding with rendering details.");

        // Use the recipe's unique slug as the key
        const recipeSlug = getSlug(item.name);

        return (
            // Add the key prop here
            <FeaturedRecipe
                key={recipeSlug} // <-- Add this key prop
                recipe={item}
                handleRelatedRecipeClick={handleRecipeClick}
                assembleAndCopy={assembleAndCopyRecipeSummary}
                isSmallView={isSmallView}
            />
        );
    };

    if (loading) {
        return <div>Loading recipes...</div>;
    }

    if (error) {
        return <div>Error loading recipes: {error.message}</div>;
    }

    // Once loading is false and no error, render the main layout
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
                        <div className="col-xs-12">
                            {(!loading && !error && recipes && recipes.length && (!collapseNav || !isSmallView)) &&
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
                </div>
                <div className="col-xs-12 col-lg-9">
                    {renderMainContent(featuredRecipe)}
                </div>
            </div>
        </div>
    );
};

export default RecipesView;