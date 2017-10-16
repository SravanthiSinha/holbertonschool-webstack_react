import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      done: false
    };

    this.toggleItem = this.toggleItem.bind(this);
  }

  toggleItem() {
    this.setState(prevState => ({
      done: !prevState.done
    }));
  }

  render() {
    return (
      <li className={this.state.done
        ? 'done'
        : null} onClick={this.toggleItem}>{this.props.value}
        <button onClick={this.props.deleteItem}>
          Delete
        </button>
      </li>
    )
  }
}

Item.propTypes = {
  value: PropTypes.string.isRequired
};

export default Item;
