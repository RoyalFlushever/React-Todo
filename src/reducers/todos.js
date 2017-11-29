import * as types from 'constants/ActionTypes';
import { List, Map } from 'immutable';
import { combineReducers } from 'redux';

// Parse the response's JSON

function parse(response) {
  return response.json();
}

function todoList(state = List(), action) {
  switch (action.type) {
    case types.ADD_TODO:
    return state.push(Map({
      id: action.id,
      text: action.text,
      isCompleted: false,
    }));

    case types.COMPLETE_TODO:
      // map through todos to find matching ID
      return state.map(todo => {
        if (todo.get('id') === action.id) {
          return todo.update('isCompleted', v => !v);
        }
        return todo;
      });

      case types.DELETE_TODO:
      return state.filter(todo => todo.get('id') !== action.id);

      case types.DELETE_ALL_TODOS:
      return state.clear();

      default:
      $.ajax({
        url: root + '/todos',
        method: 'GET'
      }).then(function(data) {
        parse(data);
      });
      return state;
    }
  }

  export default combineReducers({
    todoList,
  });
