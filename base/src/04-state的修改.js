import React, { Fragment, Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      msg: "666"
    }
  }
  render() {
    // 1 直接修改 state 会触发render render被触发了又会修改state,这样会造成死循环
    // this.state.msg = "777";

    // 2 后期修改state一般都是通过触发事件的方式
    // 以下的定时器的方式只是临时用而已 开发中不推荐这样使用
    setTimeout(() => {
      this.setState({ msg: "Write the code, change the wrold!" });
    }, 1000);
    return (
      <Fragment>
        <h1>{this.state.msg}</h1>
      </Fragment>
    )
  }
}

export default App;