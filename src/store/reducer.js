import { INPUT_CHANGE, ADD_LIST, DELETE_LIST, GET_LIST } from './actionTypes'

let defaultState = {
  inputValue: '',
  lists: []
}
export default (state = defaultState, action) => {
  console.log(state, action)
  if (action.type === INPUT_CHANGE) {
    // reducer里只能接收state, 不能直接修改 state, 
    let newState = JSON.parse(JSON.stringify(state)) // 深度克隆
    newState.inputValue = action.value
    // 返回state的
    return newState
  }

  if (action.type === ADD_LIST) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.lists.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if (action.type === DELETE_LIST) {
    let newState = JSON.parse(JSON.stringify(state))
    console.log('action.value', action.value)
    newState.lists.splice(action.value)
    return newState
  }

  if (action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.lists = action.value
    return newState
  }
  return state
}