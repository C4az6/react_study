import React, { Fragment, Component } from 'react';

// 0 class中初始化数据的写法
// 1 内置属性
// 2 构造函数中经常会对数据进行初始化

class App extends Component {
  constructor() {
    super();
    // 在使用this之前 必须要先调用super这个方法
    this.state = {
      msg: "种一棵树最好的时间是十年前，其次是现在！"
    }
  }
  // 口诀：类组件中，render是一个函数，返回一个元祖
  render() {
    return (
      <Fragment>
        <h1>{this.state.msg}</h1>
      </Fragment>
    )
  }
}


export default App;