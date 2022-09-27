import List from './components/List';
import './App.css';
import {Route, Routes, BrowserRouter as Router, Link } from "react-router-dom"
import Create from "./components/Create"

function App() {
  return (
    <Router>
      <div className="container-fluid">
          <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container-fluid">
              <div className='nav navbar-nav'>
                <Link to={"/"}>
                    <div className="nav-item nav-link">Home</div>
                </Link>
                <Link className="nav-item nav-link" to={"/create"}>Create</Link>
              </div>
            </div>
          </nav>  
      </div>
      <div className="container">
      <Routes>
        <Route exact path="/" element={<List />}></Route>
        <Route exact path="/create" element= {<Create />}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
