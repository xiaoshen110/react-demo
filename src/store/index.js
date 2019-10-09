import { createStore } from 'redux'
// 引入reducer 仓库管理员
import reducer from './reducer'

let store = createStore(reducer)
export default store
