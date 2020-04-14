import React, { Fragment, Component } from 'react';


// 1 相框组件
class ImgBorder extends Component {
  render(){
    return (
      <Fragment>
        <div style={{width: "300px", height:"200px", border: "1px dashed purple",borderRadius: "10%"}}>
        {/* 使用插槽 */}
        {this.props.children}
        </div>
      </Fragment>
    )
  }
}

class App extends Component {
  render(){
    return (
      <Fragment>
        <ImgBorder>
          <img style={{width: "100%"}} src="https://desk-fd.zol-img.com.cn/t_s208x130c5/g2/M00/06/0E/ChMlWV0VdnaIZLCtAATppbi1YeQAALVGACf5VwABOm9936.jpg" alt=""/>
        </ImgBorder>

        <ImgBorder>
          <img style={{width: "100%"}} src="https://desk-fd.zol-img.com.cn/t_s208x130c5/g2/M00/06/0A/ChMlWV0Uq7qIRIvlAAnDRHQSG1IAALUGwNq9wYACcNc229.jpg" alt=""/>
        </ImgBorder>
      </Fragment>
    )
  }
}



export default App;