import React from 'react';
import Item from './Item.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        "Read documentation", "Do the tutorial", "Add comment"
      ],
      inputValue: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }

  addItem(event) {
    if (this.state.items.indexOf(this.state.inputValue) == -1) {
      this.setState({
        items: [
          ...this.state.items,
          this.state.inputValue
        ]
      });
    }
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <label>
            New:
            <input type="text" name="name" onChange={this.handleChange} value={this.state.inputValue}/>
          </label>
          <input type="submit" value="Add"/>
        </form>
        <ul>
          {this.state.items.map((item) => <Item value={item} key={item.toString()}/>)}
        </ul>
      </div>
    );
  }
}
