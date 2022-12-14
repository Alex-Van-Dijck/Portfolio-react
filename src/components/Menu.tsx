import React,{useState} from "react";
import {Button,useTheme,Box,IconButton} from '@mui/material';
import styles from './Menu.module.css';
import {useNavigate} from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface IMenuProps{
  dark: boolean;
  setDark: (value:boolean)=>void;
}

const Menu = ({setDark,dark}:IMenuProps)=> {

  const nav = useNavigate();
  const [activeRoute,setActiveRoute] = useState<number>(0);
 

  const toggleDark = ()=>{
    setDark(!dark);
    console.log('menu toggled');
  }
  

  const theme = useTheme();

  return (
      <Box component="div" sx={{padding:'1rem',display:'flex',gap:'0.5rem',justifyContent:'center',backgroundColor:theme.palette.primary.main}}>
        <Button variant="text" onClick={()=>{nav("/"); setActiveRoute(0);}} sx={(activeRoute === 0)? {color:theme.palette.secondary.main} : {color:'white'} }>Home</Button>
        <Button variant="text" onClick={()=>{nav("/Portfolio"); setActiveRoute(1);}} sx={(activeRoute === 1)? {color:theme.palette.secondary.main} : {color:'white'} } >Portfolio</Button>
        <Button variant="text" onClick={()=>{nav("/Contact"); setActiveRoute(2);}} sx={(activeRoute === 2)? {color:theme.palette.secondary.main} : {color:'white'} }>Contact</Button>
        <div>
        <IconButton sx={{ ml: 1,position:'absolute',right:'1rem' }} onClick={toggleDark} color='secondary'>
          {dark ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </div>
      </Box>

    
  );
}

export default Menu;