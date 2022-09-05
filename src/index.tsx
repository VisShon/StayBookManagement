import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './pages/Dashboard';
import AddReservations from './pages/AddReservations';
import Login from './pages/Login';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import {AuthProvider} from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
  
);


root.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route  path='/' element={<PrivateRoute/>}>
            <Route  path='/' element={<Dashboard/>}/>
          </Route>
          <Route path='/addReservations' element={<PrivateRoute/>}>
            <Route  path='/addReservations' element={<AddReservations/>}/>
          </Route>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

