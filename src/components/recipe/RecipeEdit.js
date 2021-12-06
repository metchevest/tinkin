import React from 'react';

import RecipeForm from './RecipeForm';
import Modal from '../Modal';

const RecipeEdit = ({ recipe, onDismiss, onUpdateRecipe }) => {
	const renderContent = () => {
		return (
			<RecipeForm
				onSubmit={(recipeUpdated) => {
					onUpdateRecipe(recipeUpdated);
					onDismiss();
				}}
				buttonTitle="Save"
				onDismiss={onDismiss}
				initialValues={recipe}
			/>
		);
	};

	return (
		<Modal
			title={recipe.title}
			content={renderContent()}
			onDismiss={onDismiss}
		/>
	);
};

export default RecipeEdit;
