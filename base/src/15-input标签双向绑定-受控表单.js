import React, { Fragment, Component } from 'react';

class App extends Component {
  state = {
    inputValue: "你喜欢什么颜色??"
  }

  handleChange = (e)=>{
    console.log(e.target.value);
    this.setState({ inputValue: e.target.value });
  }



  render() {
    return (
      <Fragment>
        <input type="text" onChange={this.handleChange} value={this.state.inputValue} />
        <h4>{this.state.inputValue}</h4>
      </Fragment>
    )
  }
}


export default App;