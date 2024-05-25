import React, { useState } from 'react';
import "./App.css"

const ReactComponent = () => {

  const [user, setUser] = useState({
    name: 'Fiona Millan',
    age: 20,
    email: 'fiona@example.com',
  });

  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleNameInputChange = (e) => {
    setNewName(e.target.value);
  };

  const handleAgeInputChange = (e) => {
    setNewAge(e.target.value);
  };

  const handleEmailInputChange = (e) => {
    setNewEmail(e.target.value);
  };

  const updateUser = () => {
    setUser(prevUser => ({
      ...prevUser,
      name: newName || prevUser.name,
      age: newAge || prevUser.age,
      email: newEmail || prevUser.email,
    }));
    
    setNewName('');
    setNewAge('');
    setNewEmail('');
  };

  return (
    <div className="container">
      <h2>User Information</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Email:</strong> {user.email}</p>
      
      <div className="form-group">
        <input
          type="text"
          value={newName}
          placeholder="New Name"
          onChange={handleNameInputChange}
          className="form-control"
        />
        <input
          type="number"
          value={newAge}
          placeholder="New Age"
          onChange={handleAgeInputChange}
          className="form-control"
        />
        <input
          type="email"
          value={newEmail}
          placeholder="New Email"
          onChange={handleEmailInputChange}
          className="form-control"
        />
        <button onClick={updateUser} className="btn">Update User</button>
      </div>
    </div>
  );
};

export default ReactComponent;
