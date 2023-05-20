import React from 'react';

/* `import ReactDOM from 'react-dom/client';` is importing the `ReactDOM` library from the `react-dom`
package. The `client` module of `ReactDOM` is used for client-side rendering in the browser. It
provides methods for rendering React components to the DOM, updating the DOM when the component
state changes, and handling events. In this specific code, `ReactDOM.createRoot()` method is used to
create a root for the React application and `ReactDOM.render()` method is not used. */
import ReactDOM from 'react-dom/client';

/* `import App from './App';` is importing the `App` component from a file named `App.js` or `App.jsx`
in the same directory as the current file. This component is the root component of the React
application and is rendered by the `ReactDOM.render()` method. */
import App from './App';

/* `import store from './store';` is importing the `store` object from a file named `store.js` or
`store.jsx` in the same directory as the current file. The `store` object is created using the
`createStore` function from the Redux library and holds the state of the application. It is passed
as a prop to the `Provider` component to make it accessible to all components in the application. */
import store from './store';

/* `import { Provider } from 'react-redux';` is importing the `Provider` component from the
`react-redux` library. The `Provider` component is a higher-order component that allows the Redux
store to be accessible to all components in the application. It wraps the root component of the
application and passes the store as a prop to all child components. This allows the child components
to access the store and dispatch actions to update the state. */
import { Provider } from 'react-redux';

/* `import reportWebVitals from './reportWebVitals';` is importing a function named `reportWebVitals`
from a file named `reportWebVitals.js` or `reportWebVitals.jsx` in the same directory as the current
file. This function is used to measure the performance of the React application and can be passed to
an analytics endpoint or logged to the console. */
import reportWebVitals from './reportWebVitals';

/* These lines are importing CSS files into the JavaScript file. The first line imports a CSS file
named `index.css` from a folder named `static`, and the second line imports a CSS file named
`bootstrap.min.css` from the same folder. These CSS files contain styles that will be applied to the
HTML elements rendered by the React components in the `App` component. */
import './static/index.css';
import './static/bootstrap.min.css';

/* This code is creating a root for the React application using the `ReactDOM.createRoot()` method and
rendering the `App` component wrapped in a `Provider` component. The `Provider` component is passed
the `store` object as a prop, which makes the Redux store accessible to all components in the
application. The `root` variable is assigned the value returned by `ReactDOM.createRoot()`, which is
a root object that provides methods for rendering and updating the React components. The
`root.render()` method is then called with the `App` component wrapped in the `Provider` component
as its argument, which renders the component tree to the DOM. */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
