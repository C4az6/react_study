import React, { Component, Fragment } from "react";


// 子组件
const MyBtn = (props) => <button style={{ backgroundColor: props.btnColor, fontSize: props.fz }}>我是子组件</button>
class App extends Component {
  state = {
    sonStyles: {
      btnColor: "pink",
      fz: "100px"
    }
  }
  render(){
    return(
      <Fragment>
        <h1>123</h1>
        <hr/>
        <MyBtn {...this.state.sonStyles} />
      </Fragment>
    )
  }
}

export default App;
