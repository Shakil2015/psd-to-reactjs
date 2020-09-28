import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/js/bootstrap.js'
import './App.css';
import Header from './components/Header'
function App() {
  return (
    <div className="container">
      <div className='row'>
        <Header/>
      </div>
    </div>
  );
}

export default App;
