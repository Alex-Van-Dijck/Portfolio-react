import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import Pokedex from './Pokedex'
import { Button, TextField } from '@mui/material';
import styles from './Poke5app.module.css';

function Poke5App() {

  useEffect(() => {
    document.title = 'Pokemon';
  }, []);


  const [limit,setLimit] = useState(0);
  const [activeLimit,setActiveLimit] = useState(10);

  return (
    <div className={styles.container}>
      <Pokedex limit={activeLimit}/>
        <div className={styles.form}>
          <TextField variant="outlined" type="number" label="Limit" onChange={(e)=>{setLimit(Number(e.target.value))}} value={limit}/>
          <Button variant="outlined" onClick={()=>{setActiveLimit(limit)}}>Set Limit</Button>
        </div>
      
    </div>
  );
}

export default Poke5App;
