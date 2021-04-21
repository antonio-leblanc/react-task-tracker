import Task from './Task'

const Tasks = ({tasks}) => {
  return (
    <>
      {tasks.map((t) => (
        <Task key={t.id} task={t}></Task>
      ))}
    </>
  )
}

export default Tasks
