import { createStore } from 'redux'
// 引入reducer 仓库管理员
import reducer from './reducer'

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store
