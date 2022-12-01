import React,{useState} from "react";
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import styles from './Menu.module.css';
import {useNavigate} from 'react-router-dom';


const Menu = ()=> {

  const nav = useNavigate();
  const [activeRoute,setActiveRoute] = useState<number>(0);

  return (
    <div className={styles.container}>
      <Button variant="text" onClick={()=>{nav("/"); setActiveRoute(0);}} sx={(activeRoute === 0)? {color:'#03a9f4'} : {color:'white'} }>Home</Button>
      <Button variant="text" onClick={()=>{nav("/Portfolio"); setActiveRoute(1);}} sx={(activeRoute === 1)? {color:'#03a9f4'} : {color:'white'} } >Portfolio</Button>
      <Button variant="text" onClick={()=>{nav("/Contact"); setActiveRoute(2);}} sx={(activeRoute === 2)? {color:'#03a9f4'} : {color:'white'} }>Contact</Button>
    </div>
  );
}

export default Menu;