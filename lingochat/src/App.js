import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InterestsForm from './InterestsForm';
import Chat from './Chat';
import IO from 'socket.io-client';
import './App.css';
import FindChatRoom from './FindChatRoom';
import Home from './Home';
const socket = IO.connect('http://localhost:8080');
import UserRoute from "./private routes/userRoutes";
import Navbar from "./Navbar";
import AppContext from "./contexts/AppContext";

function App() {



  return (

    <BrowserRouter>
      <Navbar/>
      <div>
        <Routes>
          <Route
            path="/findRoom"
            element={
              <UserRoute>
                <FindChatRoom socket={socket} />
              </UserRoute>
            }
          ></Route>
          <Route
            path="/chat"
            element={
              <UserRoute>
                <Chat socket={socket} />
              </UserRoute>
            }
          ></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/interests" element={<InterestsForm />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
