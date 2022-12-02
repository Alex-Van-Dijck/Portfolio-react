import React, { useState } from 'react';
import logo from './logo.svg';
import Pokedex from './Pokedex'

function Poke5App() {

  const [limit,setLimit] = useState(0);
  const [activeLimit,setActiveLimit] = useState(10);

  return (
    <div >
      <Pokedex limit={activeLimit}/>
      <input type="number" onChange={(e)=>{setLimit(Number(e.target.value))}} value={limit}/>
      <button onClick={()=>{setActiveLimit(limit)}}>Set Limit</button>
    </div>
  );
}

export default Poke5App;
