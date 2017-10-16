import React from 'react';
import Item from './Item.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <Item value='Read documentation'/>
          <Item value='Do the tutorial'/>
          <Item value='Add comment'/>
        </ul>
      </div>
    );
  }
}
