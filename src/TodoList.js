import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
// 导入redux 状态管理
import store from './store'
import { inputChageAction, deleteListAction, addListAction } from './store/actions/todoListActions'

export class TodoList extends Component {
  constructor(props) {
    super(props)
    // store.getState() 获取仓库里的state
    this.state = store.getState()
    this.inputChange = this.inputChange.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.addList = this.addList.bind(this)
    // 订阅模式
    store.subscribe(this.storeChange)
  }

  inputChange(e){
    let value = e.target.value
    const action = inputChageAction(value)
    store.dispatch(action)
  }

  addList () {
    const action = addListAction()
    store.dispatch(action)
  }

  deleteList (index) {
    const action = deleteListAction(index)
    store.dispatch(action)
  }

  storeChange(){
    this.setState(store.getState())
  }
  

  render() {
    return (
      <div>
        <Input 
          placeholder='请输入'
          style={{width: '250px', marginRight: '10px'}}
          onChange={this.inputChange}
          value={this.state.inputValue} 
        /> 
          
        <Button type="primary" onClick={this.addList}>增加</Button>
        <List 
          style={{width: '250px'}}
          size="small" 
          bordered
          dataSource={this.state.lists}
          renderItem={(item,index) => (<List.Item onClick={this.deleteList.bind(this, index)}>{item}</List.Item>)}

        >
        </List>
      </div>
    )
  }
}

export default TodoList
