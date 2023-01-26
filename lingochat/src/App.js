import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chat from './Chat';
import IO from 'socket.io-client';
import './App.css';
import FindChatRoom from './FindChatRoom';
import Home from './Home';
const socket = IO.connect('http://localhost:8080');

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
        <Route path="/findRoom" element={<FindChatRoom socket={socket} />}></Route>
          <Route path="/chat" element={<Chat socket={socket} />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;