import './App.css';
import Header from './components/header/Header';
import Home from './components/feed/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import { MyProvider } from './context/context.jsx';
import { reducer } from './reducer/reducer.jsx';
import initialState from './reducer/initialState.js';

function App() {

    const [appState, dispatch] = useReducer(reducer, initialState);
  
    const providerState = {
      appState,
      dispatch
    }

  return (
    <MyProvider value={providerState}>
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </Router>
    </MyProvider>
    
  );
}

export default App;
