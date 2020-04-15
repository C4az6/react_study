import React, { Component, Fragment } from "react";

// 函数式组件的方式 通过形参props的方式接收参数
const HomeTop = (props) => {
    return (
      <Fragment>
        <h1>房顶的颜色:{props.color}房屋的尺寸{props.size}</h1>
      </Fragment>
    )
}


class App extends Component {
  state = {
    color: "pink",
    size: "2000px"
  }
  render() {
    return (
      <Fragment>
        <HomeTop color={this.state.color} size={this.state.size}></HomeTop>
      </Fragment>
    )
  }
}

export default App;
