import React, { PropTypes } from 'react';
import PureComponent from './PureComponent';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';

class TodoApp extends PureComponent {

  static propTypes = {
    todoList: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    const { dispatch, todoList } = this.props;
    return (
      <div className="app">
        <div className="todos">
          <h1>TASK</h1>
          <AddTodo dispatch={dispatch} />
          <TodoList dispatch={dispatch} todoList={todoList} />
          <Footer dispatch={dispatch} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.todos });

export default connect(mapStateToProps)(TodoApp);
