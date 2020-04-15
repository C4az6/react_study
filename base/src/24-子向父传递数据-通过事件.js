import React, { Component, Fragment } from "react";

/* 
  子组件给父组件传值  通过事件的方式
  1. 在父组件中，给引入的子组件挂载一个自定义事件，这个自定义事件用来接收参数和处理逻辑
  2. 在函数式子组件中使用props接收这个事件声明,然后调用这个事件声明并且传入参数
*/

const GreenBtn = (props) => {
  setInterval(() => {
    // 触发父组件上的自定义事件
    props.onChangeColor("green");
  }, 1000);
  return (
    <Fragment>
      <button>绿色</button>
    </Fragment>
  )
}

class App extends Component {
  state = {
    color: "pink"
  }
  changeColor = (color) => {
    this.setState({ color });
  }
  render() {
    return (
      <Fragment>
        <div style={{ backgroundColor: this.state.color }}>
          <GreenBtn onChangeColor={this.changeColor}></GreenBtn>
        </div>
      </Fragment>
    )
  }
}

export default App;
