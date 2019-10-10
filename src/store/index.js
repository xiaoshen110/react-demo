// applyMiddleware  compose  比较难理解
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// 引入reducer 仓库管理员
import reducer from './reducerReactRedux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPONSE__
? window.__REDUX_DEVTOOLS_EXTENSION_COMPONSE__({})
: compose
// 增强函数：指执行一个函数时，能同时执行多个函数
const enhancers = composeEnhancers(applyMiddleware(thunk))

let store = createStore(
  reducer,
  enhancers
)
export default store
