import React from 'react';
import { Link } from 'react-router-dom';
import {titleCaps, trunc, setCopiedLink, getSlug, setLinkWithQueryString} from '../utils';


const ListItem = ({ item, isSelected, onItemClick, titleKey, thumbnailKey, descriptionKey, thumbnailPrefix, pageBase }) => {

    const handleClick = () => {
        onItemClick(item);
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => console.log('copied text to clipboard ' + text))
            .catch(err => console.error('Failed to copy link: ', err));
    };

    const handleCopyRecipe = (event) => {
        event.stopPropagation();
        let recipeText = "";
        const recipe = item;
        if (!recipe || !recipe.ingredients || !recipe.steps){
            return;
        }
        let ingredients = "INGREDIENTS: ";
        let instructions = " INSTRUCTIONS: ";
        for (let i =0; i< recipe.ingredients.length;i++){
            let ingredient = recipe.ingredients[i];
            ingredients += ` ${ingredient}`
            if (i < (recipe.ingredients.length -1)){
                ingredients += ",";
            }
        }
        for (let i =0; i< recipe.steps.length;i++){
            let step = recipe.steps[i];
            let stepNumber = i+1;
            instructions += `(${stepNumber}) ${step.instruction}`
        }
        recipeText = `Recipe For ${recipe.name} ${ingredients} ${instructions}  Courtesy of Arillian Farm ${setCopiedLink('recipes', recipe.name)}`;
        copyToClipboard(recipeText);
    };



    const handleCopyLink = (event) => {
        event.stopPropagation();
        // const fullLink = setCopiedLink( pageBase, item[titleKey]);
        const fullLink = setLinkWithQueryString( pageBase, item[titleKey]);
        copyToClipboard(fullLink);
    };


    const linkTo = setLinkWithQueryString(pageBase,item[titleKey]);

    return (
        <div className="row">
            <div
                className={`col-xs-12 border2px br20 m-2 cursPoint ${isSelected ? 'highlighted' : ''}`}
                onClick={handleClick}
            >
                <div className="row">
                    <div className="col-xs-12">
                        <h4>
                            <Link to={linkTo} className="nav-link text-white">{item[titleKey]}</Link>
                        </h4>
                    </div>
                    <div className="col-lg-12">
                        {thumbnailKey && item[thumbnailKey] && (
                            <img
                                className="br20 mb-3 mr-3"
                                style={{ float: 'left', width: '75px', height: '75px', objectFit: 'cover' }}
                                src={`${thumbnailPrefix || ''}${item[thumbnailKey]}`}
                                alt={item[titleKey]}
                            />
                        )}
                        <div className="row">
                            {descriptionKey && item[descriptionKey] && (
                                <p>{typeof descriptionKey === 'function' ? descriptionKey(item) : trunc(item[descriptionKey])}</p>
                            )}
                            <div className="col-xs-12 mt-4 mb-2 text-white cursPoint text-right pull-right button-group" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                {thumbnailPrefix === '/assets/recipes/' && (
                                    <button className="btn btn-light btn-xs" style={{ padding: '0.2rem 0.4rem', fontSize: '0.6em' }} onClick={handleCopyRecipe}>
                                        <i className="fa fa-copy"></i> <b>Recipe</b>
                                    </button>
                                )}
                                <button className="btn btn-info btn-xs ml-1" style={{ padding: '0.2rem 0.4rem', fontSize: '0.6em' }} onClick={handleCopyLink}>
                                    <i className="fa fa-link"></i> <b>Link</b>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListItem;