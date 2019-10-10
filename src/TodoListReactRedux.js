import React from 'react'
import { connect } from 'react-redux'
import { INPUT_CHANGE, ADD_LIST, DELETE_LIST, GET_LIST } from './store/actionTypes'
// import axios from 'axios'
// 导入redux 状态管理
import store from './store'
import { Button, Input, List } from 'antd'

const TodoList = (props) => {
  let {inputValue, addList, lists, inputChange} = props
  return (
    <div>
      <Input 
        placeholder='请输入'
        style={{width: '250px', marginRight: '10px'}}
        value={inputValue}
        onChange={inputChange} 
      /> 
      
      <Button type="primary" onClick={addList}>增加</Button>
      <List 
        style={{width: '250px'}}
        size="small" 
        bordered
        dataSource={lists}
        renderItem={(item,index) => (<List.Item>{item}</List.Item>)}
      >
      </List>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    lists: state.lists
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    addList () {
      const action = {
        type: ADD_LIST
      }
      dispatch(action)
    },
    inputChange(e){
      const action = {
        type: INPUT_CHANGE,
        value: e.target.value
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
