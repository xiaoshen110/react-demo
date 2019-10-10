import React, { Component } from 'react'
// import axios from 'axios'
// 导入redux 状态管理
import store from './store'
import { inputChageAction, deleteListAction, addListAction,getTodoList } from './store/actions/todoListActions'
import TodoListUI from './TodoListUI'

export class TodoList extends Component {
  constructor(props) {
    super(props)
    // store.getState() 获取仓库里的state
    this.state = store.getState()
    this.inputChange = this.inputChange.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.addList = this.addList.bind(this)
    this.deleteList = this.deleteList.bind(this)
    // 订阅模式
    store.subscribe(this.storeChange)
  }

  // 未使用redux-thunk
  // componentDidMount(){
  //   axios.get('http://rap2api.taobao.org/app/mock/232874/xiaojiejie').then((res)=>{
  //     console.log('res', res)
  //     if (res.status === 200 && res.data.lists) {
  //       // 提交action，修改数据
  //       const action = getListAction(res.data.lists)
  //       // 提交到 reducer里处理
  //       store.dispatch(action)
  //     }
  //   })
  // }

  // 使用redux-thunk的做法
  componentDidMount() {
    const action = getTodoList()
    store.dispatch(action)
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
    console.log('deletelist', index)
    const action = deleteListAction(index)
    store.dispatch(action)
  }

  storeChange(){
    this.setState(store.getState())
  }
  

  render() {
    return (
      <TodoListUI 
        inputChange={this.inputChange}
        inputValue={this.state.inputValue}
        lists={this.state.lists}
        deleteList={this.deleteList}
        addList={this.addList}
      />
    )
  }
}

export default TodoList
