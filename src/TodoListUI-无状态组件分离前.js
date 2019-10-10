import React, { Component } from 'react'

import { Input, Button, List } from 'antd'
export class TodoListUI extends Component {
  render() {
    return (
      <div>
        <Input 
          placeholder='请输入'
          style={{width: '250px', marginRight: '10px'}}
          onChange={this.props.inputChange}
          value={this.props.inputValue} 
        /> 
          
        <Button type="primary" onClick={this.props.addList}>增加</Button>
        <List 
          style={{width: '250px'}}
          size="small" 
          bordered
          dataSource={this.props.lists}
          renderItem={(item,index) => (<List.Item onClick={()=>{this.props.deleteList(index)}}>{item}</List.Item>)}
        >
        </List>
      </div>
    )
  }
}

export default TodoListUI
