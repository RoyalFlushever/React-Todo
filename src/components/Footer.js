import React, { PropTypes } from 'react';
import { deleteAllTodos } from 'actions/todos';
import PureComponent from './PureComponent';

export default class Footer extends PureComponent {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }


  render() {
    const { dispatch } = this.props;
    return (
        <div className="pull-right">
          <button className="btn" onClick={() => dispatch(deleteAllTodos())}>Reset</button>
        </div>
    );
  }
}
