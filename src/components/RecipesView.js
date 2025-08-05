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
        <div className="col-sm-12 col-lg-6 mt-5">
            <div className="row">
                <div className="col-sm-12 text-center">
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
                <div className="col-sm-12">
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
        <div className="col-sm-12 col-lg-6" style={{ overflowY: 'auto' }}>
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
            <div className="col-sm-12">
                <hr />
            </div>
            <div className="col-sm-12">
                <h4>Related Recipes</h4>
            </div>
            {relatedRecipes.map((rr, index) => (
                <div key={`rr-${index}`} className="col-sm-6 col-lg-4 cursPoint" onClick={() => onRecipeClick(null, rr)}>
                    <a>{titleCaps(rr)}</a>
                </div>
            ))}
        </div>
    );
};

const FeaturedRecipe = ({ recipe, assembleAndCopy, isSmallView, handleRelatedRecipeClick }) => { // Removed setCollapseNav, collapseNav
    if (!recipe || !recipe.name) {
        return <div className="col-sm-12 text-white"><h3>Select a Recipe</h3></div>;
    }

    return (
        <div className="col-sm-12 col-lg-9" id={recipe.name.toLowerCase().replace(/ /g, '-')}>
            <div className="row">
                <div className="col-sm-12 row text-white">
                    <div className="row">
                        <div className="col-sm-12 col-lg-4 text-white cursPoint text-center button-group">
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
                        <div className="col-sm-12 col-lg-8 text-center">
                            <h3>{titleCaps(recipe.name)}</h3>
                        </div>
                        <div className="col-sm-12 small-hide">
                            {recipe.notes && <h5>{titleCaps(recipe.notes)}</h5>}
                        </div>

                        <div className="col-sm-12 bb2 mb-2" style={{ borderBottom: '2px solid white' }}></div>
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
    // Removed collapseNav state as it's no longer needed for toggling
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        setFeaturedRecipe(null);
        try {
            const processedRecipes = [...recipeData.data].reverse();
            setRecipes(processedRecipes);

            const params = new URLSearchParams(location.search);
            const idFromQuery = params.get('articleId');

            let initialFeaturedRecipe = null;
            if (idFromQuery) {
                initialFeaturedRecipe = processedRecipes.find(recipe => getSlug(recipe.name) === idFromQuery);
            }

            setFeaturedRecipe(initialFeaturedRecipe || processedRecipes[0]);
            // Removed setCollapseNav(true) as there's no more collapse action
            setError(null);
        } catch (e) {
            setError(e);
            console.error("Error fetching recipes:", e);
            setRecipes([]);
            setFeaturedRecipe(null);
        } finally {
            setLoading(false);
        }
        console.log('RecipesView useEffect - isSmallView:', isSmallView);
    }, [location.search, isSmallView]);

    useEffect(() => {
        const handleResize = () => {
            const currentIsSmall = window.innerWidth <= 400;
            setIsSmallView(currentIsSmall);
            // No need to set collapseNav here anymore
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleRecipeClick = (recipe, name) => {
        let nameValue = (name || recipe?.name);

        if (nameValue){
            let fullUrlPath = setLinkWithQueryString('recipes', nameValue);
            const url = new URL(fullUrlPath);
            const basename = "/";

            let pathForNavigate = url.pathname + url.search + url.hash;

            if (pathForNavigate.startsWith(basename)) {
                pathForNavigate = pathForNavigate.substring(basename.length);
            }

            if (pathForNavigate === "" || !pathForNavigate.startsWith('/')) {
                pathForNavigate = '/' + pathForNavigate;
            }

            const currentSearch = new URLSearchParams(location.search).toString();
            const expectedNewSearch = new URLSearchParams(url.search).toString();

            if (currentSearch === expectedNewSearch) {
                console.warn("RecipesView: handleRecipeClick - URL query is ALREADY the same. Not navigating.");
            } else {
                navigate(pathForNavigate);
            }
            // Scroll to the top of the page after the new content is loaded/rendered
            // This is primarily for mobile where the featured recipe appears below the list.
            window.scrollTo(0, 0);
            // Removed setCollapseNav(true) here
        } else {
            console.warn("RecipesView: handleRecipeClick - Called with no valid nameValue.");
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
            return <div className="col-sm-12 text-white"><h3>Select a Recipe</h3></div>;
        }

        const recipeSlug = getSlug(item.name);
        const pageTitle = item && item.name ? `${item.name} - Arillian Farm Fresh Recipes` : 'A Fresh Recipe From Arillian Farm';
        const pageDescription = item && item.notes ? item.notes : 'Browse delicious recipes and more at Arillian Farm.';

        return (
            <>
                <Helmet>
                    <title>{pageTitle}</title>
                    <meta name="description" content={pageDescription} />
                </Helmet>
                <FeaturedRecipe
                    key={recipeSlug}
                    recipe={item}
                    handleRelatedRecipeClick={handleRecipeClick}
                    assembleAndCopy={assembleAndCopyRecipeSummary}
                    isSmallView={isSmallView}
                    // Removed setCollapseNav and collapseNav props
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

    // Define the recipe list column for dynamic ordering
    const recipeListColumn = (
        <div className={`col-sm-12 ${!isSmallView ? 'col-lg-3' : ''}`}
             style={{ borderRight: !isSmallView ? '2px solid white' : '' }}>
            <div className="row cursPoint">
                {/* The list will always render now, no collapse condition */}
                {(!loading && !error && recipes && recipes.length) &&
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
    );

    // Define the featured recipe column for dynamic ordering
    const featuredRecipeColumn = (
        <div className={`col-sm-12 ${!isSmallView ? 'col-lg-9' : ''}`}>
            {renderMainContent(featuredRecipe)}
        </div>
    );

    console.log('RecipesView Render - isSmallView:', isSmallView);

    return (
        <div className="container border2px br20 text-white">
            <div className="row">
                <div className="col-sm-12">
                    <h2 className="text-white">Recipes</h2>
                </div>
            </div>
            <div className="row">
                {isSmallView ? (
                    // On small screens, show Featured Recipe first (col-sm-12), then Recipe List (col-sm-12)
                    <>

                            <div className="col-sm-12">
                                {featuredRecipeColumn}
                            </div>
                            <div className="col-sm-12">

                                 { recipeListColumn}
                            </div>
                    </>
                ) : (
                    <>
                        {recipeListColumn}
                        {featuredRecipeColumn}
                    </>
                )}
            </div>
        </div>
    );
};

export default RecipesView;