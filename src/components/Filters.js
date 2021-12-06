import React from 'react';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import CookedSelector from './CookedSelector';

const Filters = ({ setSearchText, cookedBefore, onChangeCookedBefore }) => {
	const onChangeSearchText = (e) => {
		setSearchText(e.target.value);
	};
	return (
		<div className="filters-row">
			<div>
				<input
					className="search-input"
					type="text"
					onChange={onChangeSearchText}
					placeholder="Search"
				/>
				<SearchRoundedIcon className="search-icon" />
			</div>

			<CookedSelector
				cookedBefore={cookedBefore}
				onChangeCookedBefore={onChangeCookedBefore}
			/>
		</div>
	);
};

export default Filters;
