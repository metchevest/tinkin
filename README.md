## Tinkin React Boilerplate

## Description

This project render the recipes in the data mock and let the user to add new recipes, show the recipes details and edit them.
Also, the app let the user filter the recipes based on the cooked before attribute.

## Install Dependencies

You can use [nvm](https://github.com/nvm-sh/nvm) to install the `node` version used when creating the boilerplate by executing the following command:

```
nvm use
```

To install the dependencies you can use `yarn` or `npm`.

```
yarn install
```

o

```
npm i
```

## Run the project

To run the project in development mode run the following command:

```
yarn start
```

o

```
npm run start
```

This will open a tab in the browser configured by default on port `3000`.

You can see all available scripts in the `package.json` file.

## Automatic unit tests

The boilerplate is configured with automatic testing using `React Testing Library`. If you haven't heard of this library before you can find its official documentation [here](https://testing-library.com/docs/react-testing-library/intro).

To run the tests use the command:

```
yarn test
```

o

```
npm t
```

If you don't want to use `React Testing Library`, you can remove it from the dependencies and install the library of your choice.

## Project Description

    <Recipes>
      |
      —> <Filters>
      |
      —> <RecipesList>
      |		|
      |		—> <Filters>
      |   —> <Reviews>
      |
      —> <RecipeNew>
      |
      —> <Modal>
      |
      —> <RecipeEdit>
      |
      —> <RecipeForm>
      |
      —> <CookedSelector>

    Recipes:
      Is the main component where the state is held.

      const [recipes, setRecipes] = useState(RECIPE_DATA);

      This is the state to keep the recipes, these are the recipes that later will be filtered according to cookedBefore.

    const [addRecipe, setAddRecipe] = useState(false);

    Is a state to control the show/hide of a panel to create a new recipe. For this


    Recipe List
      Is the component that renders the table with the recipes.

    Filters
      Is the component that shows the filters of the recipes to show. Let the user to filter with the cookedBefore of the recipe.
      Also holds the input to perform the search.

    Reviews
      Renders the stars based on the recipe's review

    RecipeNew

      This component uses a Modal component to show the form to create a new recipe.

    RecipeEdit

      Let's the user edit the recipe

    RecipeForm

      A formik form reusable to create a new recipe and also to edit the recipe.

    CookedSelector

      The custom select to provide the look desired for the selection

    Modal

      A reusable component to show information also It can make the user take decisions.

    DataMock -> data

      The mock of the data to render and to test.

    variables

      The export of constant variables

## Notes

- I tested only the functionality for the Basic Challenge, but developed more functionalities than that challenge.
- I used the state to show/hide components, the best way to do that is by React Router, I decided to cut this corner.
- I didn’t make the mobile version of the app because I haven’t the mock.
- I didn’t make the errors on the form, I runned out of time.
- The buttons of the form aren’t changing state when the form doesn’t have errors.
