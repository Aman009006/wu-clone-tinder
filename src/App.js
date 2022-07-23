import './App.css';
import Main from './components/Main';
import { Routes, Route, Link } from "react-router-dom";
import ChatPage from './pages/chatPage/ChatPage';

function App() {
  return (
    <div className="">
       <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/swips" element={<Main/>} />
        <Route path="/likeme" element={<Main/>} />
        <Route path="/chat" element={<ChatPage/>} />
        <Route path="/profile" element={<Main/>} />
      </Routes>
    </div>
  );
}

export default App;
