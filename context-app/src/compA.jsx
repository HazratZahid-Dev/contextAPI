import React, { useContext } from 'react'
import { FirstName } from './App'


const compA = () => {
    const fname=useContext(FirstName);
    
  return (
   
    <div>
    <h1>my name is zahid {fname}</h1>
      
    </div>
  )
}

export default compA;
