import React,{Fragment, Component} from 'react';

class App extends Component {
  state = {
    msg: "React is a Great JavaScript FrameWork!"
  }

  handleClick(){
    console.log(this);
    console.log(this.state);
  }
  
  render(){
    return (
      <Fragment>
        {/* 使用箭头函数的方式改变this指向 */}
        <button onClick={()=>{this.handleClick()}}>点我试试</button>
      </Fragment>
    )
  }
}


export default App;