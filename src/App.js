import { useEffect, useState } from 'react';
import './App.css';
import UserData from './UserData.jsx';
import Navigation from './Navigation';
import Hpara from './Hpara';


const API = "https://randomuser.me/api/?results=20";

const App = () => {
  const [users, setUsers] = useState([]);//20 data of users
  const [menipulateUser, setMenipulateUser] = useState([]);//
  const chngBtn = (event) => {
    let results;
    if (event.target.value === "male") {

      results = users.filter(i => i.gender === "male");
      setMenipulateUser(results);

      console.log(results);
    }
    else if (event.target.value === "female") {
      results = users.filter(i => i.gender === "female");
      setMenipulateUser(results);
      
    }
    else{
      setMenipulateUser(users);
    }
    
  }


  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      let results = data.results;
      let i = 0;
      if (results.length > 0) {
        setUsers(results);
        setMenipulateUser(results);
      }

      console.log(results[0]);

    } catch (e) {
      console.error(e);
    }
  }

  console.log(users);
  useEffect(() => {
    fetchUsers(API);
  }, [])

  return (
    <>
      <Navigation />
     <Hpara/>
      <div className='radioBtn'>
        <input type="radio" name='Gender' value="all" onChange={chngBtn}  /><label>All</label>
        <input type="radio" name='Gender' value="male" onChange={chngBtn} /><label>Male</label>
        <input type="radio" name='Gender' value="female" onChange={chngBtn} /><label>Female</label>
      </div>
      <div className="table">
        <table>
          <thead>
            <th>Image</th>
            <th>Name</th>
            <th>email</th>
            <th>gender</th>

          </thead>
          <tbody>
            <UserData users={menipulateUser} />
          </tbody>
        </table>
      </div>
    </>
  );
}
export default App;
