import React, { Fragment, Component } from 'react';

class App extends Component {
  state = {
    msg: "只要学不死,就往死里学!!!"
  }
  

  handleClick = ()=>{
    console.log(this.state.msg);
  }

  /* 渲染标签结构 */
  render(){
    return (
      <Fragment>
        {/* 
          1 绑定事件
            0 以前 传统html绑定事件 <input onclick="showmsg()" />
            1 事件名必须小写驼峰
            2 绑定的事件
          2 事件的执行体需要和render同层级 直接定义即可
        */}
          <button onClick={this.handleClick}>点我试试!</button>
      </Fragment>
    )
  }
}



export default App;