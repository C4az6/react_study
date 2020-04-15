import React, { Component, Fragment } from "react";

class ChangeRedBtn extends Component {
  render() {
    return (
      <Fragment>
        <button onClick={() => { this.props.onChangeBtn('red') }}>红色</button>
      </Fragment>
    )
  }
}


class ChangeBlueBtn extends Component {
  handleChange = () => {
    // 触发父元素事件
    this.props.onChangeBtn('skyblue');
  }
  render() {
    return (
      <button onClick={this.handleChange}>蓝色</button>
    )
  }
}


class ChangePinkBtn extends Component {
  handleChange = () => {
    this.props.onChangeBtn('pink');
  }
  render() {
    return (
      <button onClick={this.handleChange}>粉红色</button>
    )
  }
}

class ChangePurpleBtn extends Component {
  render() {
    return (
      <button onClick={() => { this.props.onChangeBtn('purple') }}>紫色</button>
    )
  }
}


class App extends Component {
  state = {
    color: "black"
  }

  handleChange = (color) => {
    // 设置状态
    this.setState({ color });
  }

  render() {
    return (
      <div style={{ backgroundColor: this.state.color, width: "500px", height: "500px", margin: "100px auto" }}>
        <ChangeRedBtn onChangeBtn={this.handleChange} />
        <ChangeBlueBtn onChangeBtn={this.handleChange} />
        <ChangePinkBtn onChangeBtn={this.handleChange} />
        <ChangePurpleBtn onChangeBtn={this.handleChange} />
      </div>
    )
  }
}


export default App;
