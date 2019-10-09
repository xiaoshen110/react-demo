import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
const data = [
  'sj', 'php', 'python'
]
export class TodoList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  

  render() {
    return (
      <div>
        <Input placeholder="请输入" style={{width: '250px', marginRight: '10px'}}/> <Button type="primary">增加</Button>
        <List 
          style={{width: '250px'}}
          size="small" 
          bordered
          dataSource={data}
          renderItem={item => <List.Item>{item}</List.Item>}
        >
        </List>
      </div>
    )
  }
}

export default TodoList
