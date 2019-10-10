import { INPUT_CHANGE, ADD_LIST, DELETE_LIST, GET_LIST } from '../actionTypes'
import axios from 'axios'
export const inputChageAction = (value)=>{
  return {
    type: INPUT_CHANGE,
    value
  }
}

export const addListAction = ()=>{
  return {
    type: ADD_LIST
  }
}

export const deleteListAction = (value)=>{
  return {
    type: DELETE_LIST,
    value
  }
}

export const getListAction = (value)=>{
  return {
    type: GET_LIST,
    value
  }
}



export const getTodoList = ()=>{
  return (dispatch) => {
    axios.get('http://rap2api.taobao.org/app/mock/232874/xiaojiejie')
         .then(res=>{
          const action = getListAction(res.data.lists)
          dispatch(action)
         })
  }
}
