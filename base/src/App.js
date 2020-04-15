import React, { Component, Fragment } from "react";

class App extends Component {
  // 构造函数内一般都是做一些初始化工作
  constructor() {
    super();
    this.state = {

    }
    // 1 创建一个引用 一条线
    this.inpDom = React.createRef();
  }

  handleInputFocus = () => {
    this.inpDom.current.focus();
  }

  render() {
    return (
      <Fragment>
        {/* 2 把创建好的引用 连接在对应dom元素 */}
        <input type="text" ref={this.inpDom} />
        <button onClick={this.handleInputFocus}>左侧输入框获取焦点</button>
      </Fragment>
    )
  }
}

export default App;
