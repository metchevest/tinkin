import React from 'react';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import CloseIcon from '@mui/icons-material/Close';

import { Formik, Form, Field, FieldArray } from 'formik';

const RecipeForm = ({ onSubmit, buttonTitle, onDismiss, initialValues }) => {
	const validate = (values) => {
		const errors = {};

		if (!values.title) {
			errors.title = 'Required';
		}

		if (!values.preparation) {
			errors.preparation = 'Required';
		}

		return errors;
	};

	return (
		<div className="recipe-form">
			<Formik
				initialValues={initialValues}
				validate={validate}
				onSubmit={(values) => {
					onSubmit(values);
				}}
			>
				{({ values }) => {
					return (
						<Form>
							<div>
								<label htmlFor="title" className="form-label">
									Recipe name
								</label>
								<CloseIcon className="closeIcon" onClick={onDismiss} />
							</div>
							<Field
								id="title"
								name="title"
								as="textarea"
								recipe-form-input
								placeholder={'Title* \nE.g. Slow cooked beef and rice hot pot'}
							/>

							<label htmlFor="ingredients" className="form-label">
								Ingredients
							</label>
							<FieldArray name="ingredients">
								{({ remove, push }) => {
									return (
										<div>
											{values.ingredients.length > 0 &&
												values.ingredients.map((ingredient, index) => {
													return (
														<div className="ingredient-row" key={index}>
															<label htmlFor={`ingredients.${index}.name`}>
																{index}
															</label>
															<Field
																name={`ingredients.${index}.ingredient`}
																placeholder="Type ingredient"
																type="text"
																className="recipe-form-input"
															/>
															<div>
																{index + 1 === values.ingredients.length ? (
																	<AddCircleOutlineRoundedIcon
																		onClick={() => push({ ingredientName: '' })}
																		className="add-ingredient-icon"
																	/>
																) : (
																	<DeleteForeverSharpIcon
																		onClick={() => remove(index)}
																		className="delete-ingredient-icon"
																	/>
																)}
															</div>
														</div>
													);
												})}
										</div>
									);
								}}
							</FieldArray>
							<label htmlFor="preparation" className="form-label">
								Preparation
							</label>
							<Field
								id="preparation"
								name="preparation"
								as="textarea"
								recipe-form-input
								placeholder={'Instructions* \nWrite the steps...'}
							/>

							<label className="form-label">Reviews</label>
							<div
								className="reviews-row"
								role="group"
								aria-labelledby="recipe-review"
							>
								<Field type="radio" name="reviews" value={1} />
								<label>1</label>

								<Field type="radio" name="reviews" value={2} />
								<label>2</label>

								<Field type="radio" name="reviews" value={3} />
								<label>3</label>

								<Field type="radio" name="reviews" value={4} />
								<label>4</label>
							</div>

							<label className="form-label"> Cooked Before</label>

							<div className="recipe-cookedBefore">
								<label className="cooked-before-switch">
									<Field
										id="cookedBefore"
										name="cookedBefore"
										type="checkbox"
									/>
									<span className="slider round"></span>
								</label>
							</div>
							<button className="form-button active-button" type="submit">
								{buttonTitle}
							</button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default RecipeForm;
