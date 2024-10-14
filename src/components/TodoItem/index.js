import './index.css'

const TodoItem = props => {
  const {todoDetails, onDelete} = props
  const {title, id} = todoDetails
  const deleteTodo = () => {
    onDelete(id)
  }
  return (
    <li className="bg">
      <p className="title">{title}</p>

      <button className="delete" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
