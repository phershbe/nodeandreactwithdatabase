import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState('Data goes here');
  const [API, setAPI] = useState('Data from API goes here');

  const readUsername = (e) => {
    setUsername(e.target.value);
  };

  const readPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputData = {
      username: username,
      password: password,
    };
    const requestCall = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputData),
    };
    await fetch('/register', requestCall);
    alert('Thank you for your submission!');
  };

  return (
    <div>
      <h1>Hello World!</h1>
      <form onSubmit={handleSubmit} method="POST">
        <label htmlFor="username" name="username" >Username: </label>
        <input htmlFor="username" name="username" onChange={readUsername} />
        <br/>
        <label htmlFor="password" name="password" >Password: </label>
        <input htmlFor="password" name="password" type="password" onChange={readPassword} />
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
