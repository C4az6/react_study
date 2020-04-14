import React, { Fragment, Component } from 'react';

// 1 定义子组件
class Header extends Component {
  render(){
    return (
      <Fragment>
        <h3 style={{backgroundColor: this.props.color}}>React props默认值</h3>
      </Fragment>
    )
  }
}

// 给属性添加默认值
Header.defaultProps = {
  color: "pink"
}

class App extends Component {
  state = {
    color: 'red'
  }

  render(){
    return (
      <Fragment>
        {/* 2 使用子组件 不传任何参数 */}
        {/* <Header color={this.state.color} /> */}
        <Header />
      </Fragment>
    )
  }
}

export default App;