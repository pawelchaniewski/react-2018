import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(nextState);
    return nextState.count % 2 === 0;
  }

  handleClick() {
    this.setState(state => ({ count: state.count + 1 }));
  }

  render() {
    const { count } = this.state;
    const isDisabled = count >= 5;

    return (
      <div className="App">
        Clicks: {count}
        <button disabled={isDisabled} onClick={this.handleClick}>
          Click
        </button>
      </div>
    );
  }
}

export default App;
