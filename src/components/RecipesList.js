import React, { useState } from 'react';

import RecipeShow from './recipe/RecipeShow';
import Reviews from './Reviews';

const RecipesList = ({ recipes, onCookedBefore, onUpdateRecipe }) => {
	const [showRecipe, setShowRecipe] = useState(null);

	const renderHeader = () => {
		return (
			<tr>
				<th> Recipe name</th>
				<th> Reviews </th>
				<th> Cooked before</th>
			</tr>
		);
	};

	/*The callback to change the state of the cooked before */
	const toggleCookedBefore = (id) => {
		onCookedBefore(id);
	};

	const renderCookedBefore = ({ id, cookedBefore }) => {
		return (
			<td className="cooked-before-cell">
				<label className="cooked-before-switch">
					<input
						id={id}
						name="check"
						type="checkbox"
						onChange={(e) => toggleCookedBefore(e.target.id)}
						checked={cookedBefore}
					/>
					<span className="slider round"></span>
				</label>
			</td>
		);
	};

	const renderRows = () => {
		return recipes.map((recipe, index) => {
			return (
				<tr key={index} className="recipe-row">
					<td
						className={
							recipe.cookedBefore
								? 'recipe-title-active'
								: 'recipe-title-inactive'
						}
						onClick={() => setShowRecipe(recipe.id)}
					>
						{recipe.title}
					</td>
					<td>
						<Reviews recipeReviews={recipe.reviews} />
					</td>
					{renderCookedBefore(recipe)}
				</tr>
			);
		});
	};
	const renderRecipes = () => {
		return (
			<div>
				<table className="recipe-table">
					<thead>{renderHeader()}</thead>
					<tbody>{renderRows()}</tbody>
				</table>
				{showRecipe !== null ? (
					<RecipeShow
						recipe={recipes[showRecipe]}
						onDismiss={() => setShowRecipe(null)}
						onUpdateRecipe={onUpdateRecipe}
					/>
				) : null}
			</div>
		);
	};

	return <>{renderRecipes()} </>;
};

export default RecipesList;
