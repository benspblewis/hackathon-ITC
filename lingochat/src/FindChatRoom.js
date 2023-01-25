import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FindChatRoom({ socket }) {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');

    const handleLanguageRoom = async (e) => {
        e.preventDefault();        
        localStorage.setItem('userName', userName);
        socket.emit('newUser', { userName, socketID: socket.id });
        navigate('/chat');
        // navigate('/chat')
    // const chatId = await axios.post('/chat/join-chat', {
    //   userId: currentUserId, language: selectedLanguage
    // })
    // if (chatId){
    // navigate(`/chat/${chatId}`);
    // }
    // else {
    //   alert("Could not find room")
    // }
    }

  return (
    <div>
        <form className="home__container" >
        <label>Please choose a language to start your language learning journey!</label>
          <select>
            <option>Please Select</option>
            <option>English</option>
            <option>Spanish</option>
            <option>Mandarin</option>
          </select>
          <button type='submit' onClick={handleLanguageRoom}>FIND CHAT ROOM!</button>
        </form>        
    </div>
    
  )
}

export default FindChatRoom