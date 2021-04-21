import {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'


function App() {

  const [tasks, setTasks] = useState([
    {
      id:1,
      text: 'Program new task manager',
    },
    {
      id:2,
      text: 'Create new react site',
    },
  ])

  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((t) => t.id !== id))
  }

  return (
    <div className="container">
      
      <Header></Header>
      {tasks.length >0? (
        <Tasks tasks={tasks} onDelete={deleteTask}></Tasks>
      ): ('No tasks')}

    </div>
  );
}

export default App;


// import logo from './logo.svg';
/* <img src={logo} className="App-logo" alt="logo" /> */
