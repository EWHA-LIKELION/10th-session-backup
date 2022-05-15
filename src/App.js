import React, { Component } from "react";

class App extends Component {
    state = {
      count: 0
    };

    handleChange = () => {
      this.setState({
        count: this.state.count + 1
      });
    }


  render() {
    return (
      <div className="App">
        {/* props가 들어가는 부분 */}
        <h3>index Props</h3>
        <div className="props">
          <span>{this.props.message}</span>
        </div>
        {/* state가 들어가는 부분 */}
        <h3>State</h3>
        <div className="state">
          <div>{this.state.count}</div>
          <button onClick={this.handleChange}>count up!</button>
        </div>
        <div className="appProps">
          <h3>app Props</h3>
          <InsideApp className="inside-app-props"
            count={this.state.count}
            handleChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
};

class InsideApp extends Component {
  render() {
    return (
      <div>
        {this.props.count}
        <button onClick={this.props.handleChange}>Click me!</button>
      </div>
    );
  }
}

export default App;
