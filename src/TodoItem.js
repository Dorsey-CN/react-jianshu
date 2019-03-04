import React, {Component} from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { content, test } = this.props;
    return (
      <div onClick={this.handleClick}>
        {test} - {content}
      </div>
    );
  }

  handleClick() {
    const { index, deleteItem } = this.props;
    deleteItem(index);
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}

TodoItem.defaultProps = {
  test: 'hello'
}

export default TodoItem;
