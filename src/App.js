import React from 'react'
import Navbar from './Componentes/Navbar'
import List from './Componentes/List'
import Footer from './Componentes/footer'


import './App.css';

function App() {
  return (
    <>
      <div className='navbar'>
       <Navbar/>
      </div>

      <div className='list'>
        <List/>
      </div>

      <div className='footer'>
        <Footer />
      </div>
    
    
    </>
  );
}

export default App;
