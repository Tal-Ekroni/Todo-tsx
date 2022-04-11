import React, { useState } from "react"
import { Todo } from "../todo.model"
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { MdDone } from "react-icons/md"
type Props = {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoItem = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
  }
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const handleEdit = (ev: React.FormEvent, id: number) => {
    ev.preventDefault()
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    )
    setEdit(false)
  }
  return (
    <form
      className='todo-item'
      onSubmit={(ev) => {
        handleEdit(ev, todo.id)
      }}
    >
      {edit ? (
        <input
        className='todo-item-txt'
          value={editTodo}
          onChange={(ev) => {
            setEditTodo(ev.target.value)
          }}
        />
      ) : todo.isDone ? (
        <s className='todo-item-txt'>{todo.todo}</s>
      ) : (
        <span className='todo-item-txt'>{todo.todo}</span>
      )}

      <div>
        <span
          className='icon'
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit)
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span
          className='icon'
          onClick={() => {
            handleDelete(todo.id)
          }}
        >
          <AiFillDelete />
        </span>
        <span
          className='icon'
          onClick={() => {
            handleDone(todo.id)
          }}
        >
          <MdDone />
        </span>
      </div>
    </form>
  )
}

export default TodoItem
