import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './components/Login'
import FreeListingPage from './components/FreeListingPage'
import Gallary from './components/Gallary'
import Category from './components/Category'
import WeddingVogue from './components/WeddingVogue';
import WeddingForm from './components/WeddingForm';
import Wedding from './components/Wedding';
import RealWedding from './components/Realwedding';
import Main from './components/Main';
import Register from './components/Register'
import Profile from './components/Profile'
import ForgotForm from './components/ForgotForm';
import Highlights from './components/Highlights';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/freeListingPage" element={<FreeListingPage /> } />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/category" element={<Category />} />
          <Route path="/weddingVogue" element={<WeddingVogue />} />
          <Route path='/weddingForm' element={<WeddingForm />} />
          <Route path='/wedding' element={<Wedding />} />
          <Route path='/realwedding' element={<RealWedding />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="/forgot-password" element={<ForgotForm/>} />
          <Route path="/highlights" element={<Highlights />} />
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App