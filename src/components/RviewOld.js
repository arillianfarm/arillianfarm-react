import React, { useState, useEffect } from 'react';

// Helper function (similar to your titleCaps)
const titleCaps = (str) => {
    if (!str) return '';
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

// Helper function (similar to your trunc)
const trunc = (str, length) => {
    if (!str || !length || str.length <= length) return str;
    return `${str.substring(0, length)}...`;
};

// RecipeListItem Component
const RecipeListItem = ({ recipe, isHighlighted, onRecipeClick, assembleAndCopy }) => {
    return (
        <div
            className={`col-xs-12 border2px br20 m-2 cursPoint ${isHighlighted ? 'highlighted' : ''}`}
            onClick={() => onRecipeClick(recipe.name)}
        >
            <div className="row">
                <div className="col-xs-12">
                    <h4>
                        <a className="nav-link text-white">{titleCaps(recipe.name)}</a>
                    </h4>
                </div>
                <div className="col-lg-12">
                    {recipe.header_pic && (
                        <img
                            className="br20 mb-5 mr-3"
                            style={{ float: 'left', width: '75em', height: '75em', objectFit: 'cover' }}
                            src={`./assets/recipes/${recipe.header_pic}`}
                            alt={recipe.name}
                        />
                    )}
                    <div>
                        {recipe.notes && <p>{trunc(recipe.notes, 80)}</p>}
                        <div className="text-white cursPoint">
                            <button className="btn btn-light btn-xs" onClick={() => assembleAndCopy(recipe)}>
                                <i className="fa fa-files-o"></i> <b>Recipe</b>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// RecipeSidebar Component
const RecipeSidebar = ({ recipes, featuredRecipe, onRecipeClick, assembleAndCopy, isSmallView, collapseNav, setCollapseNav }) => {
    return (
        <div className="col-xs-12 col-lg-3" style={{ borderRight: !isSmallView ? '2px solid white' : '' }}>
            <div className="row cursPoint">
                <div className="col-xs-12">
                    <h3>
                        <a>All Recipes</a>
                        {isSmallView && (
                            <button className="btn btn-large btn-primary" onClick={() => setCollapseNav(!collapseNav)}>
                                <i className="fa fa-list"></i>
                            </button>
                        )}
                    </h3>
                </div>
                {(!collapseNav || !isSmallView) &&
                    recipes.map((recipe, index) => (
                        <RecipeListItem
                            key={index}
                            recipe={recipe}
                            isHighlighted={featuredRecipe && recipe.name === featuredRecipe.name}
                            onRecipeClick={onRecipeClick}
                            assembleAndCopy={assembleAndCopy}
                        />
                    ))}
            </div>
        </div>
    );
};

// RecipeIngredients Component
const RecipeIngredients = ({ ingredients, servings, headerPic, isSmallView }) => {
    return (
        <div className="col-xs-12 col-lg-6 mt-5">
            <div className="row">
                <div className="col-xs-12 text-center">
                    {headerPic && (
                        <img
                            className="br20 m-3"
                            src={`./assets/recipes/${headerPic}`}
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
    );
};

// RecipeSteps Component
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
                                src={`./assets/recipes/${step.pic}`}
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

// FeaturedRecipe Component
const FeaturedRecipe = ({ recipe, assembleAndCopy, isSmallView }) => {
    if (!recipe) {
        return <div className="col-xs-12 text-white"><h3>Select a Recipe</h3></div>;
    }
    return (
        <div className="col-xs-12 col-lg-9" id={recipe.name.toLowerCase().replace(/ /g, '-')}>
            <div className="row">
                <div className="col-xs-12 row text-white">
                    <div className="row">
                        <div className="col-xs-8 col-lg-4">
                            <h3>{titleCaps(recipe.name)}</h3>
                        </div>
                        <div className="col-lg-4 small-hide mt-3">
                            {recipe.notes && <h5>{titleCaps(recipe.notes)}</h5>}
                        </div>
                        <div className="col-xs-12 col-lg-4 mt-4 text-white cursPoint text-right pull-right">
                            <button className="btn btn-light btn-xs" onClick={() => assembleAndCopy(recipe)}>
                                <i className="fa fa-files-o"></i> <b>Recipe</b>
                            </button>
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

// RecipesView Component (Main Container)
const RecipesView = () => {
    const [recipes, setRecipes] = useState([]);
    const [featuredRecipe, setFeaturedRecipe] = useState(null);
    const [isSmallView, setIsSmallView] = useState(window.innerWidth <= 400);
    const [collapseNav, setCollapseNav] = useState(true);
    const [loading, setLoading] = useState(true); // Add a loading state
    const [error, setError] = useState(null); // Add an error state

    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('./pageData/recipes.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setRecipes(data.data); // Access the 'data' array from your JSON
                setFeaturedRecipe(data.data[0] || null); // Set initial featured recipe
            } catch (e) {
                setError(e);
                console.error("Error fetching recipes:", e);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();

        const handleResize = () => {
            setIsSmallView(window.innerWidth <= 400);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array means this runs once after the initial render

    const handleRecipeClick = (recipeName) => {
        const selected = recipes.find(recipe => recipe.name === recipeName);
        setFeaturedRecipe(selected);
        // Implement scroll to featured recipe if needed
    };

    const assembleAndCopyRecipeSummary = (recipe) => {
        if (!recipe || !recipe.ingredients || !recipe.steps) {
            return;
        }
        const ingredients = `INGREDIENTS: ${recipe.ingredients.join(', ')}`;
        const instructions = recipe.steps.map((step, index) => `(${index + 1}) ${step.instruction}`).join(' ');
        const summary = `Recipe For ${recipe.name} ${ingredients} INSTRUCTIONS: ${instructions} Courtesy of Arillian Farm [Link to recipe page]`; // You'll need to implement the link
        navigator.clipboard.writeText(summary)
            .then(() => console.log('Recipe summary copied to clipboard'))
            .catch(err => console.error('Failed to copy recipe summary: ', err));
    };

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
                <RecipeSidebar
                    recipes={recipes}
                    featuredRecipe={featuredRecipe}
                    onRecipeClick={handleRecipeClick}
                    assembleAndCopy={assembleAndCopyRecipeSummary}
                    isSmallView={isSmallView}
                    collapseNav={collapseNav}
                    setCollapseNav={setCollapseNav}
                />
                <FeaturedRecipe
                    recipe={featuredRecipe}
                    assembleAndCopy={assembleAndCopyRecipeSummary}
                    isSmallView={isSmallView}
                />
            </div>
        </div>
    );
};

export default RecipesView;