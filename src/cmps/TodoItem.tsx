import React from "react"
import { Todo } from "../todo.model"
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { MdDone } from "react-icons/md"
type Props = {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoItem = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className='todo-item'>
      <span className='todo-item-txt'>{todo.todo}</span>
      <div>
        <span className='icon'>
          <AiFillEdit />
        </span>
        <span className='icon'>
          <AiFillDelete/>
        </span>
        <span className='icon'>
          <MdDone/>
        </span>

      </div>
    </form>
  )
}

export default TodoItem
