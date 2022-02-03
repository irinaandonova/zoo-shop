import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Header from './components/Header/Header.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
