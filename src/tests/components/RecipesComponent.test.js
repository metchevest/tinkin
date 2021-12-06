import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Recipes from '../../components/Recipes';
import { RECIPES_DATA } from '../../dataMock/data';

describe('Tests for Recipes Component', () => {
	it('List the recipes', () => {
		const { getByText } = render(<Recipes />);
		expect(getByText('Kitchen Recipes')).toBeInTheDocument();
	});

	it('List the recipes in the mock data', () => {
		render(<Recipes />);

		let recipes = RECIPES_DATA;

		recipes.forEach((aRecipe) => {
			expect(screen.getByText(aRecipe.title)).toBeInTheDocument();
		});
	});

	it('Test cookedBefore Filter', () => {
		const { container } = render(<Recipes />);
		let recipes = RECIPES_DATA;

		// Get all the rows of the table
		const rowsBeforeFilter = container.querySelectorAll(
			'table.recipe-table tr.recipe-row'
		);

		//Compare the amount of rows with the amount of objects in the mock
		expect(rowsBeforeFilter.length).toBe(recipes.length);

		//Fire the event to filter the rows, to show only Active
		const divFilter = container.querySelectorAll('div.picker-item');
		fireEvent.click(divFilter[1]);

		//Get the amount of rows rendered
		const rowsAfterFilter = container.querySelectorAll(
			'table.recipe-table tr.recipe-row'
		);

		//Get all active recipes in the mock
		let activeMockRecipes = recipes.filter((r) => r.cookedBefore);

		//Compare agains the amount of actives recipes in the mock
		expect(rowsAfterFilter.length).toBe(activeMockRecipes.length);

		//Fire the event to show only the inactive
		fireEvent.click(divFilter[2]);
		const rowsAfterSecondFilter = container.querySelectorAll(
			'table.recipe-table tr.recipe-row'
		);

		//Get all inactive recipes in the mock
		let inactiveMockRecipes = recipes.filter((r) => !r.cookedBefore);

		//Compare the amount of rows rendered and the amount of recipes inactive in the mock
		expect(rowsAfterSecondFilter.length).toBe(inactiveMockRecipes.length);
	});

	it('Test recipe reviews', () => {
		const { container } = render(<Recipes />);
		let recipes = RECIPES_DATA;

		//Get all the elements with the class star-active
		let starsActives = Array.from(container.querySelectorAll('.star-active'));

		//Count the amount of points in the mock
		let amountStarActive = 0;
		recipes.forEach((r) => (amountStarActive += r.reviews));

		//Compare the two numbers to see if the amount of active stars is the same as the amount in the mock
		expect(starsActives.length).toBe(amountStarActive);
	});
});
