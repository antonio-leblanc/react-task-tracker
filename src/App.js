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

  return (
    <div className="container">
      <Header title='Task Tracker'></Header>
      <Tasks tasks={tasks}></Tasks>
    </div>
  );
}

export default App;


// import logo from './logo.svg';
/* <img src={logo} className="App-logo" alt="logo" /> */
