import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import 'antd/dist/antd.css'
import TodoListReactRedux from './TodoListReactRedux'

ReactDOM.render(
  <Provider store={store}><TodoListReactRedux /></Provider>, 
  document.getElementById('root')
);
