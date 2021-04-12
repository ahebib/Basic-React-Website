import List from './List';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="home-title">React Template</h1>
      <List type={"to-do"} />
      <List type={"other"} />
    </div>
  );
}

export default App;