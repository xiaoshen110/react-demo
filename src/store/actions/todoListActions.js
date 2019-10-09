import { INPUT_CHANGE, ADD_LIST, DELETE_LIST } from '../actionTypes'

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