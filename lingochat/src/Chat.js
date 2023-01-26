import React, { useEffect, useState, useRef } from "react";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import { useAppContext } from "./hooks/useAppContext";


const Chat = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState("");
  const lastMessageRef = useRef(null);
  const [queries, setQueries] = useState(null)
  const {avtiveUsers, setAveUsers} = useAppContext()
  const [ativeUserNAme , setActiveUserName] = useState(null)
  useEffect(()=>{
    setQueries(new URLSearchParams(window.location.search))
  },[])

  useEffect(()=>{
   
  },[])
useEffect(()=>{
  console.log(avtiveUsers)
},[avtiveUsers])

  useEffect(()=>{
    if(queries){
      const userId = queries.get('userId');
      const roomId = queries.get('roomId');
      const userName = queries.get('username');
      setActiveUserName(userName)
      socket.emit("joinRoom", { userId, roomId })
    }
  },[queries])


  useEffect(() => {
    socket.on("message", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  // useEffect(() => {
  //   lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  // useEffect(() => {
  //   socket.on("typingResponse", (data) => setTypingStatus(data));
  // }, [socket]);

  return (
    <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
        <ChatBody messages={messages} typingStatus={typingStatus} lastMessageRef={lastMessageRef} />
        <ChatFooter socket={socket} name={ativeUserNAme} />
      </div>
    </div>
  );
};

export default Chat;
