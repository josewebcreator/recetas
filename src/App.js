import './App.css';
import Header from './components/header/Header';
import Home from './components/feed/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MyProvider } from './context/context';
import Favorites from './components/favorites/Favorites';
import React from 'react'


function App() {


  return (
      <MyProvider>
          <Router>
              <div className="App">
                  <Header />
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/favorites" element={<Favorites />} />
                  </Routes>
              </div>
          </Router>
      </MyProvider>
  );
}

export default App;
