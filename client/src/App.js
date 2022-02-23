import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Header from './components/Header/Header.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import { AuthContextProvider } from './context/AuthContext.js';
import MyProfile from './components/MyProfile/MyProfile.js';
import EditProfile from './components/Edit Profile/EditProfile.js';
import Details from './components/Details/Details.js';
import Cart from './components/Cart/Cart.js';

function App() {




  return (
    <div className="App">
      <AuthContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
          <Route path='/cat' element={<Dashboard />} />
          <Route path='/dog' element={<Dashboard />} />
          <Route path='/roden' element={<Dashboard />} />
          <Route path='/other' element={<Dashboard />} />
          <Route path='/profile' element={<MyProfile />}/>
          <Route path="/profile/:userId/edit" element={<EditProfile />}/>
          <Route path='/details/:productId' element={<Details />}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </AuthContextProvider>

    </div>
  );
}

export default App;
