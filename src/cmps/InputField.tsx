import React from "react"
import "./styles.css"

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
}
const InputField = ({ todo, setTodo }: Props) => {
  return (
    <form className='input'>
      <input type='input' placeholder='Enter a Todo' className='input-box'
      value={todo}
      onChange={(e)=>setTodo(e.target.value)} />
      <button type='submit' className='input-btn'>
        Go
      </button>
    </form>
  )
}

export default InputField
