import React,{useState} from "react";
import {Button,useTheme,Box} from '@mui/material';
import styles from './Menu.module.css';
import {useNavigate} from 'react-router-dom';
import { ColorModeContext } from "./ToggleColorMode";


const Menu = ()=> {

  const nav = useNavigate();
  const [activeRoute,setActiveRoute] = useState<number>(0);

  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box component="div" sx={{padding:'1rem',display:'flex',gap:'0.5rem',justifyContent:'center',backgroundColor:'#3f51b5'}}>
      <Button variant="text" onClick={()=>{nav("/"); setActiveRoute(0);}} sx={(activeRoute === 0)? {color:'#03a9f4'} : {color:'white'} }>Home</Button>
      <Button variant="text" onClick={()=>{nav("/Portfolio"); setActiveRoute(1);}} sx={(activeRoute === 1)? {color:'#03a9f4'} : {color:'white'} } >Portfolio</Button>
      <Button variant="text" onClick={()=>{nav("/Contact"); setActiveRoute(2);}} sx={(activeRoute === 2)? {color:'#03a9f4'} : {color:'white'} }>Contact</Button>
    </Box>
  );
}

export default Menu;