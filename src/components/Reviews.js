import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const Reviews = ({ recipeReviews }) => {
	return (
		<div>
			<StarIcon
				className={recipeReviews >= 1 ? 'star-active' : 'star-inactive'}
			/>
			<StarIcon
				className={recipeReviews >= 2 ? 'star-active' : 'star-inactive'}
			/>
			<StarIcon
				className={recipeReviews >= 3 ? 'star-active' : 'star-inactive'}
			/>
			<StarIcon
				className={recipeReviews >= 4 ? 'star-active' : 'star-inactive'}
			/>
		</div>
	);
};

export default Reviews;
