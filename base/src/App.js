import React, { Component, Fragment } from "react";

/* 
  兄弟组件之间传值思路：
    1. 组件A将需要传递的数据先传递给父组件，通过事件的方式
    2. 父组件接收到子组件A传递过来的数据之后，把数据传递给子组件B
    3. 组件B如果想给组件A传值也是按照上面的步骤
*/


// 1 组件A
const GreenBtn = (props) => {
  const handleClick = () => {
    props.onChangeColor("green");
  }
  return (
    <button style={{ color: props.color }} onClick={handleClick}>绿色</button>
  )
}


// 2 组件B
const RedBtn = (props) => {
  const handleClick = () => {
    props.onChangeColor("red");
  }
  return (
    <button style={{ color: props.color }} onClick={handleClick}>红色</button>
  )
}

// 3 组件C
class App extends Component {
  state = {
    color: ""
  }

  // 接收子组件传递过来的参数
  onChangeColor = (color) => {
    setTimeout(() => {
      this.setState({ color });
    }, 2000);
  }

  render() {
    return (
      <div style={{ backgroundColor: this.state.color }} >
        <GreenBtn onChangeColor={this.onChangeColor} color={this.state.color}></GreenBtn>
        <RedBtn onChangeColor={this.onChangeColor} color={this.state.color}></RedBtn>
      </div>
    )
  }

}
export default App;
