import React, { Fragment, Component } from 'react';

class App extends Component {
  state = {
    checked: ''
  }
  handleChange = (e) => {
    console.log(e.target.checked);
    this.setState({ checked: e.target.checked })
  }
  render() {
    return (
      <Fragment>
        <input type="checkbox" onChange={this.handleChange} checked={this.state.checked} />
        <h4>当前的选中状态为：{this.state.checked + ""}</h4>
      </Fragment>
    )
  }
}


export default App;