import React from 'react';
import { useContext } from 'react';
import compA from './compA';
import './App.css';

function App() {
  const FirstName=useContext();
  return (
    <FirstName.Provider value='zahid'> 
     <compA />
    </FirstName.Provider>
    
      
    
  );
}

export default App;
export {FirstName};