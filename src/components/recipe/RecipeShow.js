import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import Modal from '../Modal';
import Reviews from '../Reviews';

import RecipeEdit from './RecipeEdit';

const RecipeShow = ({ recipe, onDismiss, onUpdateRecipe }) => {
	const [edit, setEdit] = useState(false);

	const renderIngredients = () => {
		return recipe.ingredients.map((ingredient, index) => {
			return <li key={index}> {ingredient.ingredient}</li>;
		});
	};

	const renderCookedBefore = () => {
		return (
			<>
				<label> Cooked before</label>
				<div className="cooked-before-switch">
					<input
						id={recipe.id}
						name="check"
						type="checkbox"
						readOnly
						checked={recipe.cookedBefore}
					/>
					<span className="slider round"></span>
				</div>
			</>
		);
	};

	const renderContent = () => {
		return (
			<div className="recipe-show">
				<CloseIcon className="closeIcon" onClick={onDismiss} />
				<label> Ingredients </label>
				<ul>{renderIngredients()}</ul>
				<div>
					<label> Preparation</label>
					<p>{recipe.preparation}</p>
				</div>
				<label> Reviews </label>
				<Reviews recipeReviews={recipe.reviews} />
				{renderCookedBefore()}
				<button
					className="form-button"
					type="submit"
					onClick={() => setEdit(true)}
				>
					Edit
				</button>
			</div>
		);
	};

	return (
		<div>
			{edit ? (
				<RecipeEdit
					recipe={recipe}
					onDismiss={onDismiss}
					onUpdateRecipe={onUpdateRecipe}
				/>
			) : (
				<Modal
					title={recipe.title}
					content={renderContent()}
					onDismiss={onDismiss}
				/>
			)}
		</div>
	);
};

export default RecipeShow;
