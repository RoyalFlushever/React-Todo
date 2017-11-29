import React, { PropTypes } from 'react';
import PureComponent from './PureComponent';
import Todo from './Todo';

export default class TodoList extends PureComponent {

  static propTypes = {
    activeFilter: PropTypes.string.isRequired,
    todoList: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    const todoList = this.props.todoList;
    return (
      <div>
        {!!todoList.size && (
          <ul className="list-group">
            {todoList.map(todo => {
              return (
                <Todo key={todo.get('id')}
                    dispatch={this.props.dispatch}
                    todo={todo}
                />
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
