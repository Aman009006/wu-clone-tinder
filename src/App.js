import './App.css';
import Main from './components/Main';
import { Routes, Route, Link } from "react-router-dom";
import ChatPage from './pages/chatPage/ChatPage';
import SwiperPage from './pages/swipePage/SwiperPage';
import LikePage from './pages/meLikePage/LikePage';
import ProfilePage from './pages/profilePage/ProfilePage';

function App() {
  return (
    <div className="">
       <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/swips" element={<SwiperPage/>} />
        <Route path="/likeme" element={<LikePage/>} />
        <Route path="/chat" element={<ChatPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
      </Routes>
    </div>
  );
}

export default App;
