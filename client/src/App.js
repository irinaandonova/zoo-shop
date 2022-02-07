import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Header from './components/Header/Header.js';
import Dashboard from './components/Dashboard/Dashboard.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
        <Route path='/cat' element={<Dashboard />} />
        <Route path='/dog' element={<Dashboard />} />
        <Route path='/roden' element={<Dashboard />} />
        <Route path='/other' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
