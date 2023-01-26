import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

const Home = ({ username, setUsername, room, setRoom, socket }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [roomName, setRoomName] = useState("");
  const {currentUser} = useAuthContext()
  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    // socket.emit("joinRoom", { roomName, userName, socketID: socket.id });
    const response = await axios.post("http://localhost:8080/chat/join-chat", {language: roomName, userId: currentUser.userId})
    if(response){
      console.log(response.data)
      navigate(`/chat/?username=${userName}userId=${currentUser.userId}&&roomId=${response.data.chatId}`);
    }
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
        <select required value={room} onChange={(e) => setRoomName(e.target.value)}>
          <option defaultValue='' disabled>Select</option>
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
