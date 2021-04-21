import {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id:1,
      text: 'Learn react creating a this task manager',
      date: '21/04/21 morning',
      reminder: false
    },
    {
      id:2,
      text: 'Create new react personal site',
      date: '21/04/21 afternoon',
      reminder: true
    },
  ])

  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((t) => t.id !== id))
  }

  const toggleTask = (id) => {
    console.log('toggle', id)
    setTasks(tasks.map((t) => 
    t.id === id ? {...t, reminder:!t.reminder}
    : t
    ))
    console.log('tasks', tasks)

  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1 
    const newTask = {id, ...task}
    console.log(newTask)
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      
      <Header
      onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}
      >
      </Header>
      {showAddTask && <AddTask onAdd={addTask}></AddTask>}
      {tasks.length >0? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask}></Tasks>
      ): ('No tasks')}

    </div>
  );
}

export default App;


// import logo from './logo.svg';
/* <img src={logo} className="App-logo" alt="logo" /> */
