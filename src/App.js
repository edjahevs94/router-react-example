import List from './components/List';
import './App.css';

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="container-fluid">
            <div className='nav navbar-nav'>
              <div className="nav-item nav-link active" > <a class="nav-link" href="#">Home</a></div>
              <div className="nav-item nav-link" ><a class="nav-link" href="#">Create project</a></div>
            </div>
          </div>
        </nav>
        <List></List>
    </div>
  );
}

export default App;
