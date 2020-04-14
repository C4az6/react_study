import React, { Fragment, Component } from 'react';

// 1 声明子组件 函数式组件2
function HomeTop(props){
  return (
    <Fragment>
      <h1 style={{backgroundColor: props.homeColor}}>HomeTop</h1>
    </Fragment>
  )
}

class App extends Component {
  state = {
    homeColor: "pink"
  }
  render(){
    return (
      <Fragment>
        {/* 2 使用 子组件 */}
        <HomeTop homeColor={this.state.homeColor} />
      </Fragment>
    )
  }
}
export default App;