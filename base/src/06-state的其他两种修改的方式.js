import React, { Fragment, Component } from 'react';

class App extends Component {
  state = {
    num: 0
  }

  handleClick = () => {
    let { num } = this.state;
    num++;

    // 1 在 setState的第二个参数中 加一个回调函数 就可以实时获取到最新的state中的数据
/*     this.setState({num},function(){
      let newNum = this.state.num;
      if(newNum>=10){
        alert("滚去学习...");
      }
    }); */

    this.setState({num:100});
    console.log(this.state.num);

    // 2 修改state的第二种方法 setState接收一个函数即可获取到最新的state中的值,也可以修改state的值
    this.setState(function(preState){
      // 3 preState可以获取到上一个state中的值 就等于上一次修改state中的值
      console.log(preState.num);
      return {
        num: 123333
      }
    })
  }

  render(){
    return (
      <Fragment>
        {/* 绑定一个点击事件 */}
    <div onClick={this.handleClick}>{this.state.num}</div>
      </Fragment>
    )
  }
}

export default App;