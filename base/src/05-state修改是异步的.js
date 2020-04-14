import React, { Fragment, Component } from 'react';

class App extends Component {
  state = {
    msg: "state修改是异步的"
  }

  // 2 声明事件
  handleClick = () => {
    // 1 在调用setState方法的时候没有马上进行赋值
    // 2 而是等一会再做,让这个修改的state的代码都执行完毕，再触发msg的改变
    this.setState({
      msg: "修改完了..."
    })
    console.log(this.state.msg);
  }
  render() {
    return (
      <Fragment>
        {/* 1 绑定一个点击事件 */}
        <h1 onClick={this.handleClick}>{this.state.msg}</h1>
      </Fragment>
    )
  }
}

export default App;