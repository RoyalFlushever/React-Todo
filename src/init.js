import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoApp from './components/TodoApp';
import rootReducer from './reducers';
import 'styles/app.css';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('todo')
);
