import './App.css';
import Home from './components/home';
import About from './components/about';
import Users from './components/users';
/* import User from './components/user'; */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/users" element={<Users/>}/>
          {/* <Route path="/user/:id" element={<User/>}/> */}
        </Routes>
      </div>
    </Router>
    </div>
  );
}


export default App;
