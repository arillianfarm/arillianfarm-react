import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import {useLocation, useNavigate} from 'react-router-dom';
import {titleCaps, getSlug, setLinkWithQueryString, getIframeSrcForYouTube} from '../utils';
import { Helmet } from 'react-helmet-async';
import recipeData from '../pageData/recipes.json';
import Comments from "./Comments";

const RecipeIngredients = ({ ingredients, servings, headerPic, isSmallView, headerVid, headerTitle }) => {
    if (!ingredients || ingredients.length === 0) {
        return null;
    }
    return (
        <div className="col-xs-12 col-lg-6 mt-5">
            <div className="row">
                <div className="col-xs-12 text-center">
                    {!headerVid && headerPic &&  (
                        <img
                            className="br20 m-3"
                            src={`${process.env.PUBLIC_URL||""}/assets/recipes/${headerPic}`}
                            style={{ height: isSmallView ? 'auto' : '300px', maxWidth: '55em', objectFit: 'cover' }}
                            alt="Recipe Header"
                        />
                    )}
                </div>
                <div className="col-sm-12 text-center">
                    {headerVid && (
                        <div className="row text-center ">
                            <div className="col-sm-12 text-center">
                                <iframe
                                    style={{ height: '20em', padding: '10px', maxWidth: '55em' }}
                                    className="video-box mr-3"
                                    height="auto"
                                    autoPlay={false}
                                    src={getIframeSrcForYouTube(headerVid)}
                                    title={`${headerTitle} Video`}
                                />
                            </div>
                        </div>
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
                    <li
                        key={`s-${index}`}
                        style={{
                            overflow: 'hidden', // Ensures the float is contained within the li
                            marginBottom: '1.5em', // Consistent spacing between steps
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <h4 className="mb-3">{step.instruction}</h4> {/* Adjusted margin for less vertical space */}
                        {step.pic && (
                            <img
                                className="br20"
                                src={`${process.env.PUBLIC_URL}/assets/recipes/${step.pic}`}
                                style={{
                                    // *** FOR SQUARE IMAGES ***
                                    width: isSmallView ? '100%' : '250px', // On small view, full width. On large, fixed 150px.
                                    height: isSmallView ? 'auto' : '250px', // On small view, height adjusts with width. On large, fixed 150px.
                                    aspectRatio: '1 / 1', // Forces a 1:1 aspect ratio for the image container
                                    objectFit: 'cover', // This will now crop to fill the 1:1 square
                                    // *****************************************

                                    float: step.right_side_pic ? 'right' : 'left', // Keep float if desired for text wrapping
                                    marginLeft: step.right_side_pic ? '1em' : '0',
                                    marginRight: step.right_side_pic ? '0' : '1em',
                                    marginBottom: '0.5em',
                                    display: 'block' // Ensures image behaves as a block, important with floats
                                }}
                                alt={`Step ${index + 1}`}
                            />
                        )}
                        <div style={{ clear: 'both' }}></div> {/* Ensures next content starts below floated image */}
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
    if (!recipe || !recipe.name) {
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
                    headerTitle={recipe.vid_caption || recipe.name || "Garden Fresh Recipe"}
                    headerVid={recipe.vid}
                    isSmallView={isSmallView}
                />
                <RecipeSteps fullRecipe={recipe} steps={recipe.steps} isSmallView={isSmallView} />
            </div>
            <RelatedRecipes
                relatedRecipes={recipe.related_recipes}
                onRecipeClick={handleRelatedRecipeClick} />
            <div className="row">
                <div className="col-sm-12 mt-3 text-center">
                    <Comments
                        article_name={recipe?.name}
                        article_type="project"
                        pub_date={recipe?.pub_date}
                    />
                </div>
            </div>
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

        if (nameValue){
            // setLinkWithQueryString likely returns a full URL for copy/share purposes
            let fullUrlPath = setLinkWithQueryString('recipes', nameValue);

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



            // You still need the comparison logic to avoid navigating if already on the same page
            // The comparison should be based on the *search* part relative to the basename,
            // as the pathname will likely be the same '/recipes/'
            const currentSearch = new URLSearchParams(location.search).toString();
            const expectedNewSearch = new URLSearchParams(url.search).toString(); // Get search from the generated URL

            if (currentSearch === expectedNewSearch) {
                console.warn("RecipesView: handleRecipeClick - URL query is ALREADY the same. Not navigating.");
            } else {
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
        if (!item || !item.name) {
            return <div className="col-xs-12 text-white"><h3>Select a Recipe</h3></div>;
        }

        // Use the recipe's unique slug as the key
        const recipeSlug = getSlug(item.name);
        const pageTitle = item && item.name ? `${item.name} - Arillian Farm Fresh Recipes` : 'A Fresh Recipe From Arillian Farm';
        const pageDescription = item && item.notes ? item.notes : 'Browse delicious recipes and more at Arillian Farm.';


        return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                {/* add other meta tags here too */}
            </Helmet>
            <FeaturedRecipe
                key={recipeSlug}
                recipe={item}
                handleRelatedRecipeClick={handleRecipeClick}
                assembleAndCopy={assembleAndCopyRecipeSummary}
                isSmallView={isSmallView}
            />
        </>
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
                <div className="col-xs-12 col-lg-9">
                    {renderMainContent(featuredRecipe)}
                </div>
            </div>
        </div>
    );
};

export default RecipesView;