import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

import RecipesList from './RecipesList';
import { RECIPES_DATA } from '../dataMock/data';
import RecipeNew from './recipe/RecipeNew';
import Filters from './Filters';

import { ALL, ACTIVE, INACTIVE } from './variables';

const Recipes = () => {
	const [recipes, setRecipes] = useState(RECIPES_DATA);
	const [addRecipe, setAddRecipe] = useState(false);
	const [cookedBefore, setCookedBefore] = useState(ALL);
	const [searchText, setSearchText] = useState('');

	const onCookedBefore = (id) => {
		let recipesUpdated = recipes.map((item) => {
			if (item.id == id) {
				item.cookedBefore = !item.cookedBefore;
			}

			return item;
		});

		setRecipes(recipesUpdated);
	};

	const onSaveNewRecipe = (newRecipe) => {
		let recipesUpdated = [...recipes, newRecipe];
		setRecipes(recipesUpdated);
		setAddRecipe(false);
	};

	const onUpdateRecipe = (recipeUpdated) => {
		const newRecipes = [...recipes];
		newRecipes[recipeUpdated.id] = recipeUpdated;
		setRecipes(newRecipes);
	};

	const onDismissRecipeNew = () => {
		setAddRecipe(false);
	};

	const onChangeCookedBefore = (cookedBeforeState) => {
		setCookedBefore(cookedBeforeState);
	};

	const getRecipes = () => {
		if (searchText == '') {
			switch (cookedBefore) {
				case ALL:
					return recipes;
				case ACTIVE:
					return recipes.filter((r) => r.cookedBefore);
				case INACTIVE:
					return recipes.filter((r) => !r.cookedBefore);
				default:
					return recipes;
			}
		} else {
			return recipes.filter((r) =>
				r.title.toLowerCase().includes(searchText.toLowerCase())
			);
		}
	};

	return (
		<div className="main-container">
			<div className="recipes-header"></div>
			<div className="body-container">
				<div className="recipes-side"></div>
				<div className="recipes-main">
					<h2> Kitchen Recipes </h2>
					<Filters
						setSearchText={setSearchText}
						cookedBefore={cookedBefore}
						onChangeCookedBefore={onChangeCookedBefore}
					/>
					<RecipesList
						recipes={getRecipes()}
						onCookedBefore={onCookedBefore}
						onUpdateRecipe={onUpdateRecipe}
					/>
					<div onClick={() => setAddRecipe(true)}>
						<AddIcon className="add-recipe-button" />
					</div>
					{addRecipe ? (
						<RecipeNew
							onSaveNewRecipe={onSaveNewRecipe}
							onDismiss={onDismissRecipeNew}
						/>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Recipes;
