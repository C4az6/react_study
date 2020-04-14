import React, { Fragment, Component } from 'react';
// 1 引入类型检验的包
import PropTypes from 'prop-types';

class HomeTop extends Component {
  render(){
    return (
      <Fragment>
        <h3>这个月的发的工资：</h3>
        <h4>{this.props.num+20}元</h4>
      </Fragment>
    )
  }
}


// 2 进行类型校验
HomeTop.propTypes = {
  // 校验num的类型为nubmer类型,如果不是也不会阻塞代码的执行,只是会在控制台报错提示
  num: PropTypes.number
}

class App extends Component {
  state = {
    // num: "10"
    num: "10000"
  }
  render(){
    return (
      <Fragment>
        <HomeTop num={this.state.num}></HomeTop>
      </Fragment>
    )
  }
}


export default App;