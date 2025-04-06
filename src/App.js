import './App.css';
import Header from './components/header/Header';
import Home from './components/feed/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
