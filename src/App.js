import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import DashBoard from './components/DashBoard';

export default function App() {
  return (
    <Router>
      <div>
        {/* 👇️ Wrap your Route components in a Routes component */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashBoard" element={<DashBoard />} />
        </Routes>
      </div>
    </Router>
  );
}
