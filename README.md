# Single Page App with React.js
## Description: 
You are on your way to finishing this insane project… Create the first of three cart pages - Shopping cart page.
Also, here you meet one of the most popular React library - [`Redux`](https://react-redux.js.org/).

## Functionality:
### Item page: 
“Add to cart” action should be implemented using `Redux flow`: when you add an item to cart, it should be added to your `redux store`. On Cart page you take all of the items from the store
### Cart page: 
“add/remove” actions should be implemented through redux actions & reducers as well.

## Code style:
- Redux: All Redux parts (actions / reducers / store) should be kept in separate and specific files (actions.js / reducers.js / store.js etc.)
- Use [`useSelector`](https://react-redux.js.org/api/hooks#useselector-examples) hook for getting the data from redux store (instead of connect() function)
- Use [`useDispatch`](https://react-redux.js.org/api/hooks#usedispatch) hook for dispatching your actions (instead of connect() function)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
