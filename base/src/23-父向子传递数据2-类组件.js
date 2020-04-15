import React, { Component, Fragment } from "react";

class HomeTop extends Component {
  render() {
    return (
      <h1>屋顶的颜色是 {this.props.acolor} 尺寸 {this.props.asize}</h1>
    )
  }
}

class App extends Component {
  state = {
    color: "blue",
    size: 100
  }
  render() {
    return (
      <HomeTop acolor={this.state.color} asize={this.state.size}></HomeTop>
    )
  }
}

export default App;
