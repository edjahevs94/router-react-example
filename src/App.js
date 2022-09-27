import List from './components/List';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="container-fluid">
            <div className='nav navbar-nav'>
              <div className="nav-item nav-link"> Home </div>
              <div className="nav-item nav-link" >Create project</div>
            </div>
          </div>
        </nav>
        <div className= "container">
          <List />
        </div>
        
    </div>
  );
}

export default App;
