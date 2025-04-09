import './App.css';
import Header from './components/header/Header';
import Home from './components/feed/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import { MyProvider } from './context/context';
import { reducer } from './reducer/reducer';
import initialState from './reducer/initialState.js';

function App() {


  return (
      <MyProvider>
          <Router>
              <div className="App">
                  <Header />
                  <Routes>
                      <Route path="/" element={<Home />} />
                  </Routes>
              </div>
          </Router>
      </MyProvider>
  );
}

export default App;
