import Task from './Task'

const Tasks = ({tasks, onDelete}) => {
  return (
    <>
      {tasks.map((t) => (
        <Task key={t.id} task={t} onDelete={onDelete}></Task>
      ))}
    </>
  )
}

export default Tasks
