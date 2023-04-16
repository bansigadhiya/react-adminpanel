import React from 'react';
import Header from '../Header/Header';

function MainComponent({handleSidebarToggle}) {
  return (
    <div className='bg-light vh-100'>
      <Header handleSidebarToggle={handleSidebarToggle}/>
      <div className="container-fluid">
        MainComponent
      </div>
    </div>
  )
}

export default MainComponent
