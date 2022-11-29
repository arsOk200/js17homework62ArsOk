import React, {useState} from 'react';
import {User} from "../../type";
import UserForm from "../../Components/User-Form/UserForm";
import Users from "../../Components/Users/Users";

const HomeWork57 = () => {

  const [users, setUsers] = useState<User[]>([]);

  const addUser = (newUser: User) => {
    setUsers(prev => [...prev, newUser])};

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col">
          <UserForm onSubmit={addUser}/>
        </div>
        <div className='col'>
          <h2>Users</h2>
          <Users users={users}/>
        </div>
      </div>
    </div>
  );
};

export default HomeWork57;