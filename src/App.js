import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import Top5 from './Component/Top5';
import Auth from './pages/Auth';
import Verify from './pages/Verify';
import Dashboard from './pages/Dashboard';
import toast, { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import OpenRoute from './Component/Auth/OpenRoute'
import PrivateRoute from './Component/Auth/PrivateRoute'
import LandingPage from './routes/landing page/LandingPage';
import io from 'socket.io-client';
import SearchPage from './routes/Game Search/SearchPage';
import Error404 from './routes/Error 404/Error404';
import Game from './routes/Game/Game';
import { useState } from 'react';
const socket = io.connect('http://localhost:4000')



function App() {
  const [finding, setFinding] = useState(false)
  return (
    <div className="">
      <Routes>
        <Route element={<LandingPage socket={socket} setFinding={setFinding} />} path='/' />
        {finding && (<Route element={<SearchPage socket={socket} setFinding={setFinding} />} path='/finding' />)}
        <Route path="/top5" element={<Top5 />} />
        <Route
          path="/auth"
          element={
            <OpenRoute>
              <Auth />
            </OpenRoute>
          }
        />
        <Route
          path="/verify-email"
          element={
            <OpenRoute>
              <Verify />
            </OpenRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/game/:roomID"
          element={
            <PrivateRoute>
              <Game />
            </PrivateRoute>
          }
        />
        <Route element={<Error404 />} path='/*' />

      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
