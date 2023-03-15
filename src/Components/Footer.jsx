import React from 'react'
import { useState } from 'react'

const Footer = ({activeTab, setActiveTab}) => {
  const [back, setReturn] = useState('return')
  const handleClick = () => {
    setActiveTab(Number(activeTab) + 1);
  };
  
  return (

    <footer className="absolute bg-white bottom-0 w-full h-16 border border-solid border-black px-3 flex justify-between">
      <button type='button'>{back}</button>
      <button type='button' 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
        onClick={handleClick}
        >next</button>
    </footer>

  )
}

export default Footer