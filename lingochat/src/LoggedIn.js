import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoggedIn = ({ socket }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('userName', userName);
    socket.emit('newUser', { userName, socketID: socket.id });
    navigate('/chat');

  };

  const FindRoom = () => {
    navigate('/FindRoom')
  }

  return (    
  <>

    <form className="home__container" onSubmit={handleSubmit}>
      <h2 className="home__header">Sign in to Open Chat</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        minLength={6}
        name="username"
        id="username"
        className="username__input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="home__cta" >SIGN IN</button>
      <button className="home__cta" onClick={FindRoom}>Find Chat</button>
    </form>
    </>
  );
};

export default LoggedIn;