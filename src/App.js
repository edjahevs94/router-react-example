import List from './components/List';
import './App.css';

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="container-fluid">
            <div className='nav navbar-nav'>
              <div className="nav-item nav-link"> Home </div>
              <div className="nav-item nav-link" >Create project</div>
            </div>
          </div>
        </nav>
        <List></List>
    </div>
  );
}

export default App;
