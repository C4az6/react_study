import React, { Fragment, Component } from 'react';


class App extends Component {
  state = {
    inputValue: "",
    list: ["苹果", "香蕉"]
  }
  // input框双向绑定
  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  // 删除任务项
  handleRemoveItem = (index) => {
    let { list } = this.state;
    list.splice(index, 1);
    this.setState({ list });
  }

  // 添加任务项
  handleAddItem = () => {
    let { inputValue, list } = this.state;
    if (!inputValue.trim()) {
      alert("请输入内容再添加!");
    } else {
      // 过滤重复数据
      list = list.filter(v => v !== inputValue);
      list.push(inputValue);
      this.setState({ list }, () => {
        console.log(this.state.list);
      });
    }
  }

  render() {
    return (
      <Fragment>
        <input type="text" placeholder="添加你喜欢吃的水果:" value={this.state.inputValue} onChange={this.handleChange} />
        <button onClick={this.handleAddItem}>添加</button>

        {
          <ul>
            {this.state.list.map((item, index) => <li key={index} onClick={this.handleRemoveItem.bind(this, index)}>{item}----{index}</li>)}
          </ul>
        }
      </Fragment>
    )
  }
}


export default App;