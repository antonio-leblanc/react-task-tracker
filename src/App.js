import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header title='Antonas'></Header>
      <h1>Hello from react</h1>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
