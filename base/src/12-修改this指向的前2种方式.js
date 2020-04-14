import React, { Fragment, Component } from 'react';

class App extends Component {
  state = {
    msg: "2020-4-14 11:39:24"
  }
  handleClick(){
    // this本来就是一个undefined
    // 被锁死类组件本身了
    console.log(this);
    console.log(this.state.msg)
  }

  render(){
    return (
      <Fragment>
        {/* 1 下面的这个this还是组件本身 强行让this指向App组件 */}
        <button onClick={this.handleClick.bind(this)}>点我试试!</button>
        {/* 2 bind不能修改为call apply 因为他们会自动执行不符合当前需求*/}
        {/* <button onClick={this.handleClick.call(this)}>点我呀</button> */}
      </Fragment>
    )
  }
}

export default App;