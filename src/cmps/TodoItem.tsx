import React from "react"
import { Todo } from "../todo.model"
import { AiFillEdit} from 'react-icons/ai'
type Props = {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoItem = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className='todo-item'>
      <span className='todo-item-txt'>{todo.todo}</span>
      <div><span className="icons">
         <AiFillEdit/> </span></div>
    </form>
  )
}

export default TodoItem
