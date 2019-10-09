import { createStore } from 'redux'
// 引入reducers
import reducer from './reducer'
let store = createStore(reducer)

export default store
