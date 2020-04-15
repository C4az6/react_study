import React, { Fragment, Component } from 'react';

/* 
  优化版本的Todolist
*/

class App extends Component {
  state = {
    list: ["努力学习React", "早睡早起"],
    inputValue: ""
  }
  // 监听用户输入的双向绑定
  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  // 监听用户删除任务操作
  handleRemoveItem(index) {
    let { list } = this.state;
    // 根据索引进行删除
    list.splice(index, 1);
    this.setState({ list });
  }

  // 监听用户添加任务操作
  handleAddItem = () => {
    let { inputValue, list } = this.state;
    // 过滤操作，添加任务的时候要保证list里面没有和inputValue相等的值
    if (!inputValue.trim()) {
      alert("请输入待办任务!");
      return;
    }
    list = list.filter(v => v !== inputValue);
    list.push(inputValue);
    // 更新组件状态
    this.setState({ list });
  }
  render() {
    return (
      <Fragment>
        <input type="text" placeholder="请输入你想做的事情." value={this.state.inputValue} onChange={this.handleChange} />
        <button onClick={this.handleAddItem}>添加</button>
        <ul>
          {
            this.state.list.map((item, index) => <li key={index} style={{ listStyle: "none" }}>{item}---{index} <button onClick={this.handleRemoveItem.bind(this, index)}>删除</button> </li>)
          }
        </ul>
      </Fragment>
    )
  }
}

export default App;