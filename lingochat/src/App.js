import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Chat from './Chat';
import IO from 'socket.io-client';
import './App.css';
import FindChatRoom from './FindChatRoom';
const socket = IO.connect('http://localhost:4000');

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path="/FindRoom" element={<FindChatRoom socket={socket} />}></Route>
          <Route path="/chat" element={<Chat socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;