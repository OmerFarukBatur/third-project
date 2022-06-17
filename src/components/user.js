import {useParams} from 'react-router-dom';
import {useEffect,useState} from 'react';
import axios from 'axios';

function User() {

    const {id} = useParams();
    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(true);

    useEffect(() =>{
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => setUser(res.data))
        .finally(() => setLoading(false));
    },[])

  return (
    <div>
      <h1>User Detail</h1>
      {loading && <div>Loading</div>}
      <h3>UserId: {user.id}</h3>
      <h6>UserName: {user.name}</h6>
    </div>
  )
}

export default User
