import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete}) => {
  return (
    <div className='task'>
      <h3>
        {task.text}
        <FaTimes
        onClick = {()=> onDelete(task.id)}
        style={{color:'red', cursor:'pointer'}}></FaTimes>
      </h3>
    </div>
  )
}

export default Task
 