import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './pages/Home'
import History from './pages/History';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />}/>
          <Route path='/historia' element={<History />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

