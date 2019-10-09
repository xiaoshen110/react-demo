import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
// 导入redux 状态管理
import store from './store'
const data = [
  'sj', 'php', 'python'
]
export class TodoList extends Component {
  constructor(props) {
    super(props)
    // store.getState() 获取仓库里的state
    this.state = store.getState()
  }
  

  render() {
    return (
      <div>
        <Input placeholder={this.state.inputValue} style={{width: '250px', marginRight: '10px'}}/> <Button type="primary">增加</Button>
        <List 
          style={{width: '250px'}}
          size="small" 
          bordered
          dataSource={this.state.lists}
          renderItem={item => <List.Item>{item}</List.Item>}
        >
        </List>
      </div>
    )
  }
}

export default TodoList
