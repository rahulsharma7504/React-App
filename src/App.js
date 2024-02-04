import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>This is a Class-Based Component</h1>
        <p>Props: {this.props.someProp}</p>
      </div>
    );
  }
}

export {MyComponent} ;
