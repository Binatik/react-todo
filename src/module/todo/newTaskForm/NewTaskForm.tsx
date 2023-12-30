import { Input } from "../../../components/input/Input"
import './NewTaskForm.css'

function NewTaskForm () {
 return (
  <Input mode="primary" className="new-todo" placeholder="What needs to be done?" />
 )
}

export {NewTaskForm}