import {  BrowserRouter as Router, Routes, Route, Link ,useMatch } from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import User from './user';

function Users() {
  const [users,setUsers] = useState([]);
  const [loading,setLoading] = useState(true);
  const { path, url } = useMatch();

  console.log(path);

  useEffect(() =>{
    axios('https://jsonplaceholder.typicode.com/users')
    .then((res) => setUsers(res.data))
    .finally(() => setLoading(false));
  },[]);
  return (
    <div>
      <h1>Users</h1>
      {loading && <div>Loading</div>}
      <ul>        
        {
      users.map((user) =>(
        <li key={user.id}><Link to= {`/user/${user.id}`}> {user.name}</Link></li>
      ))
     }
      </ul>
      <Router>
      <Routes>
        <Route exact path={path}><h3>Please select a user.</h3></Route>
        <Route path={`${path}/:id`} element={<User/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default Users
