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
      <Button variant="text" onClick={()=>{nav("/"); setActiveRoute(0);}} className={(activeRoute === 0)? styles.BtnSelected : styles.BtnDefault} >Home</Button>
      <Button variant="text" onClick={()=>{nav("/Portfolio"); setActiveRoute(1);}} className={(activeRoute === 1)? styles.BtnSelected : styles.BtnDefault} >Portfolio</Button>
      <Button variant="text" onClick={()=>{nav("/Contact"); setActiveRoute(2);}} className={(activeRoute === 2)? styles.BtnSelected : styles.BtnDefault}>Contact</Button>
    </div>
  );
}

export default Menu;