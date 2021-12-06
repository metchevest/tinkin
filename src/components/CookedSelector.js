import React, { useState } from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { ALL, ACTIVE, INACTIVE } from './variables';

const CookedSelector = ({ cookedBefore, onChangeCookedBefore }) => {
	const [select, setSelect] = useState(false);
	const pickerRef = React.createRef();

	const changeCookedBefore = (value) => {
		onChangeCookedBefore(value.target.value);
	};

	const renderPickerActive = () => {
		return (
			<div className="picker-active">
				<div className="picker-inside"></div>
			</div>
		);
	};

	const renderPickerInactive = () => {
		return <div className="picker-inactive"></div>;
	};

	return (
		<div
			className="cooked-before-selector"
			tabIndex={0}
			onClick={() => setSelect((old) => !old)}
		>
			Cooked before: <strong>{cookedBefore}</strong>
			<KeyboardArrowDownIcon className="selector-arrow" />
			<div
				className={
					select ? 'cooked-before-picker' : 'cooked-before-picker hidden'
				}
				tabIndex={0}
				ref={pickerRef}
				onBlur={() => {
					setSelect(false);
				}}
			>
				<div className="picker-item" onClick={() => onChangeCookedBefore(ALL)}>
					<div>All</div>
					{cookedBefore === ALL ? renderPickerActive() : renderPickerInactive()}
				</div>
				<div
					className="picker-item"
					onClick={() => onChangeCookedBefore(ACTIVE)}
				>
					<div>Active</div>
					{cookedBefore === ACTIVE
						? renderPickerActive()
						: renderPickerInactive()}
				</div>
				<div
					className="picker-item"
					onClick={() => onChangeCookedBefore(INACTIVE)}
				>
					<div>Inactive</div>
					{cookedBefore === INACTIVE
						? renderPickerActive()
						: renderPickerInactive()}
				</div>
			</div>
		</div>
	);
};

export default CookedSelector;
