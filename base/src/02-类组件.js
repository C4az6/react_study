import React, {Component} from 'react';

// 1 react中的组件名首字母必须大写！
// 2 类组件 必须要继承react的父类 Component

class App extends Component {
  // 3 可以放属性、方法 也可以放构造函数
  // 4 必须要定一个方法 名称叫做render

  render(){
    return (
      <h1>类组件</h1>
    )
  }
}


export default App;