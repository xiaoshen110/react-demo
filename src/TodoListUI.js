import React from 'react'
import { Input, Button, List } from 'antd'

const TodoListUI = (props)=>{
  return (
    <div>
      <Input 
        placeholder='请输入'
        style={{width: '250px', marginRight: '10px'}}
        onChange={props.inputChange}
        value={props.inputValue} 
      /> 
        
      <Button type="primary" onClick={props.addList}>增加</Button>
      <List 
        style={{width: '250px'}}
        size="small" 
        bordered
        dataSource={props.lists}
        renderItem={(item,index) => (<List.Item onClick={()=>{props.deleteList(index)}}>{item}</List.Item>)}
      >
      </List>
    </div>
  )
}
export default TodoListUI

// export class TodoListUI extends Component {
//   render() {
//     return (
//       <div>
//         <Input 
//           placeholder='请输入'
//           style={{width: '250px', marginRight: '10px'}}
//           onChange={this.props.inputChange}
//           value={this.props.inputValue} 
//         /> 
          
//         <Button type="primary" onClick={this.props.addList}>增加</Button>
//         <List 
//           style={{width: '250px'}}
//           size="small" 
//           bordered
//           dataSource={this.props.lists}
//           renderItem={(item,index) => (<List.Item onClick={()=>{this.props.deleteList(index)}}>{item}</List.Item>)}
//         >
//         </List>
//       </div>
//     )
//   }
// }


