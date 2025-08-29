import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { titleCaps, getSlug, setLinkWithQueryString, getIframeSrcForYouTube } from '../utils';
import { Helmet } from 'react-helmet-async';
import recipeData from '../pageData/recipes.json';
import Comments from "./Comments"; // Your existing Comments component

// Re-using RecipeIngredients, RecipeSteps, RelatedRecipes components (no changes needed)
const RecipeIngredients = ({ ingredients, servings, headerPic, isSmallView, headerVid, headerTitle }) => {
    if (!ingredients || ingredients.length === 0) {
        return null;
    }
    return (
        <div className="col-xs-12 col-lg-6 mt-5">
            <div className="row">
                <div className="col-xs-12 text-center">
                    {!headerVid && headerPic && (
                        <img
                            className="br20 m-3"
                            src={`${process.env.PUBLIC_URL || ""}/assets/recipes/${headerPic}`}
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
                                    allow="compute-pressure"
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
    )
};

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
                        <h4 className="mb-3">{step.instruction}</h4>
                        {step.pic && (
                            <img
                                className="br20"
                                src={`${process.env.PUBLIC_URL}/assets/recipes/${step.pic}`}
                                style={{
                                    width: isSmallView ? '100%' : '250px',
                                    height: isSmallView ? 'auto' : '250px',
                                    aspectRatio: '1 / 1',
                                    objectFit: 'cover',
                                    float: step.right_side_pic ? 'right' : 'left',
                                    marginLeft: step.right_side_pic ? '1em' : '0',
                                    marginRight: step.right_side_pic ? '0' : '1em',
                                    marginBottom: '0.5em',
                                    display: 'block'
                                }}
                                alt={`Step ${index + 1}`}
                            />
                        )}
                        <div style={{ clear: 'both' }}></div>
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

const SingleRecipeView = () => {
    const { recipeSlug } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isSmallView, setIsSmallView] = useState(window.innerWidth <= 400);

    // Effect for handling window resize
    useEffect(() => {
        const handleResize = () => {
            setIsSmallView(window.innerWidth <= 400);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Effect for loading the specific recipe based on recipeSlug
    useEffect(() => {
        setLoading(true);
        try {
            const foundRecipe = recipeData.data.find(r => getSlug(r.name) === recipeSlug);
            setRecipe(foundRecipe);
            if (!foundRecipe) {
                console.warn(`Recipe with slug "${recipeSlug}" not found. Redirecting to all recipes.`);
                navigate('/recipes'); // Redirect to the list view if recipe not found
            }
            setError(null);
        } catch (e) {
            setError(e);
            console.error("Error loading single recipe:", e);
            setRecipe(null);
        } finally {
            setLoading(false);
        }
    }, [recipeSlug, navigate]);

    const assembleAndCopyRecipeSummary = (currentRecipe) => {
        if (!currentRecipe || !currentRecipe.ingredients || !currentRecipe.steps) {
            return;
        }
        const ingredients = `INGREDIENTS: ${currentRecipe.ingredients.join(', ')}`;
        const instructions = currentRecipe.steps.map((step, index) => `(${index + 1}) ${step.instruction}`).join(' ');
        const summary = `Recipe For ${currentRecipe.name} ${ingredients} INSTRUCTIONS: ${instructions} Courtesy of Arillian Farm [Link to recipe: ${setLinkWithQueryString('recipes', currentRecipe.name)}]`;
        navigator.clipboard.writeText(summary)
            .then(() => console.log('Recipe summary copied to clipboard'))
            .catch(err => console.error('Failed to copy recipe summary: ', err));
    };

    const handleRelatedRecipeClick = (clickedRecipe, name) => {
        const nameValue = (name || clickedRecipe?.name);
        if (nameValue) {
            const newSlug = getSlug(nameValue);
            navigate(`/recipes/${newSlug}`); // Navigate to the new related recipe
        }
    };

    if (loading) {
        return <div className="container text-white">Loading recipe...</div>;
    }

    if (error) {
        return <div className="container text-white">Error loading recipe: {error.message}</div>;
    }

    if (!recipe) {
        return <div className="container text-white">Recipe not found.</div>;
    }

    const pageTitle = recipe.name ? `${recipe.name} - Arillian Farm Fresh Recipes` : 'A Fresh Recipe From Arillian Farm';
    const pageDescription = recipe.notes ? recipe.notes : `View the full recipe for ${recipe.name} from Arillian Farm.`;

    return (
        <div className="container border2px br20 text-white">
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                {/* JSON-LD Structured Data for Recipe (remains the same) */}
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Recipe",
                        "name": "${recipe.name}",
                        "image": "${process.env.PUBLIC_URL}/assets/recipes/${recipe.header_pic}",
                        "description": "${recipe.notes || recipe.name}",
                        "prepTime": "PT${recipe.prep_time_minutes || 0}M",
                        "cookTime": "PT${recipe.cook_time_minutes || 0}M",
                        "recipeYield": "${recipe.servings || '1 serving'}",
                        "recipeIngredient": [
                            ${recipe.ingredients ? recipe.ingredients.map(ing => `"${ing}"`).join(',\n                            ') : ''}
                        ],
                        "recipeInstructions": [
                            ${recipe.steps ? recipe.steps.map((step, index) => `
                            {
                                "@type": "HowToStep",
                                "text": "${step.instruction}"
                                ${step.pic ? `,"image": "${process.env.PUBLIC_URL}/assets/recipes/${step.pic}"` : ''}
                            }`).join(',\n                            ') : ''}
                        ],
                        "author": {
                            "@type": "Person",
                            "name": "Arillian Farm"
                        },
                        "datePublished": "${recipe.pub_date || new Date().toISOString().split('T')[0]}",
                        "video": ${recipe.vid ? `
                            {
                                "@type": "VideoObject",
                                "name": "${recipe.vid_caption || recipe.name} Recipe Video",
                                "description": "${recipe.notes || recipe.name} recipe video from Arillian Farm.",
                                "thumbnailUrl": "${process.env.PUBLIC_URL}/assets/recipes/${recipe.header_pic}",
                                "uploadDate": "${recipe.pub_date || new Date().toISOString().split('T')[0]}",
                                "embedUrl": "${getIframeSrcForYouTube(recipe.vid)}"
                            }` : 'null'
                    },
                        "nutrition": {
                            "@type": "NutritionInformation",
                            "suitableForDiet": "https://schema.org/VegetarianDiet"
                        }
                    }
                    `}
                </script>
            </Helmet>
            <div className="row">
                <div className="col-xs-12">
                    <h2 className="text-white">Recipes</h2>
                </div>
            </div>
            <div className="row">
                {/* This column will always take full width on all screen sizes */}
                <div className="col-xs-12">
                    {/* NEW: Button for mobile list view */}
                    {isSmallView && (
                        <div className="row mt-3 mb-3">
                            <div className="col-xs-12 text-center">
                                <button
                                    className="btn btn-primary btn-large"
                                    onClick={() => navigate('/recipes')} // Navigates to the RecipeListOnlyView route
                                >
                                    <i className="fa fa-list"></i> View All Recipes
                                </button>
                            </div>
                        </div>
                    )}
                    <div className="row">
                        <div className="col-xs-12 row text-white">
                            <div className="row">
                                <div className="col-xs-12 col-lg-4 text-white cursPoint text-center button-group">
                                    <button className="btn btn-light btn-xs" onClick={() => assembleAndCopyRecipeSummary(recipe)}>
                                        <i className="fa fa-copy"></i> <b>Recipe</b>
                                    </button>
                                    <button className="btn btn-info btn-xs" onClick={(event) => {
                                        event.stopPropagation();
                                        const location = window.location;
                                        const base = location.origin + location.pathname;
                                        const link = setLinkWithQueryString('recipes', recipe.name);
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
            </div>
        </div>
    );
};

export default SingleRecipeView;