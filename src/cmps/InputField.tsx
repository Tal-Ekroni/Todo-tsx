import React, { useRef } from "react"
import "./styles.css"

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (ev: React.FormEvent) => void
}
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef=useRef<HTMLInputElement>(null) 
  return (
    <form className='input' onSubmit={(ev)=> {
      handleAdd(ev)
      inputRef.current?.blur()
    }}>
      <input
      ref={inputRef}
        type='input'
        placeholder='Enter a Todo'
        className='input-box'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type='submit' className='input-btn'>
        Go
      </button>
    </form>
  )
}

export default InputField
