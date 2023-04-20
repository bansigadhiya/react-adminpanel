import React from 'react';
import Header from '../Header/Header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Product from '../Products/Product';
import Admin from '../Admin/Admin';
import Setting from '../Setting/Setting';

function MainComponent({ handleSidebarToggle , handle }) {
  return (
    <div className='bg-light vh-100'>
      <Header handleSidebarToggle={handleSidebarToggle} handle={handle}/>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/setting' element={<Setting />}></Route>
        </Routes>
    </div>
  )
}

export default MainComponent
