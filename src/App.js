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



function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
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
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
