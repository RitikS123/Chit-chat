import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import ChatPage from './Component/ChatPage';
import socketIO from 'socket.io-client';

// in this hame server ka url daalna pdta h:
const socket = socketIO.connect('http://localhost:4000');
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;