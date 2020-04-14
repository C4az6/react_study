import React, { Fragment, Component } from 'react';

class App extends Component {
  state = {
    msg: "2020-4-14 11:57:48"
  }

  constructor(){
    super();
    // 在使用this之前不要忘记super
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log(this);
    console.log(this.state.msg);
  }

  render(){
    return (
      <Fragment>
        <button onClick={this.handleClick}>点我试试啊!</button>
      </Fragment>
    )
  }
}

export default App;