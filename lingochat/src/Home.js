import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ socket }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  const [language, setLanguage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('userName', userName);
    socket.emit('newUser', {language, userName, socketID: socket.id });
    navigate(`/chat`);
    // const chatId = await axios.post('/chat/join-chat', {
    //   userId: currentUserId, language: selectedLanguage
    // })
    // if (chatId){
    // navigate(`/chat/${chatId}`);
    // }
    // else {
    //   alert("Could not find room")
    // }
  };

  const [roomName, setRoomName] = useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };
  
  return (    
  <>

    <form className="home__container" onSubmit={handleSubmit}>
      <h2 className="home__header">Please choose a username and a language to start your chin wag now!</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        minLength={6}
        name="username"
        id="username"
        className="username__input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
          <label>Language!</label>
          <select required value={roomName} onChange={handleRoomNameChange}> 
            <option></option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="Mandarin">Mandarin</option>
          </select>
      <button className="home__cta">Find Chat</button>
    </form>
    </>
  );
};

export default Home;