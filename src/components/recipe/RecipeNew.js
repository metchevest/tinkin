import React from 'react';

import RecipeForm from './RecipeForm';
import Modal from '../Modal';

const RecipeNew = ({ onSaveNewRecipe, onDismiss }) => {
	const initialValues = {
		title: '',
		ingredients: [{ name: '' }, { name: '' }],
		preparation: '',
		reviews: '',
		cookedBefore: true,
	};

	const renderContent = () => {
		return (
			<RecipeForm
				onSubmit={onSaveNewRecipe}
				buttonTitle="Create"
				onDismiss={onDismiss}
				initialValues={initialValues}
			/>
		);
	};

	return (
		<Modal title="New Recipe" content={renderContent()} onDismiss={onDismiss} />
	);
};

export default RecipeNew;
