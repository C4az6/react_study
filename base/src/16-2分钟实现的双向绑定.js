import React, { Fragment, Component } from 'react';

/*
  5分钟之内实现一个input双向绑定
*/

class App extends Component {
  state = {
    inputVal: "请输入你女朋友的名字:"
  }
  handleChange = (e) => {
    let inputVal = e.target.value;
    this.setState({ inputVal });
  }
  render() {
    return (
      <Fragment>
        <input type="text" onChange={this.handleChange} value={this.state.inputVal} />
        <h4>{this.state.inputVal}</h4>
      </Fragment>
    )
  }
}


export default App;