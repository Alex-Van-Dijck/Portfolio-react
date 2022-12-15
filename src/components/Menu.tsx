import React,{useState} from "react";
import {Button,useTheme,Box,IconButton} from '@mui/material';
import {useNavigate} from 'react-router-dom';



const Menu = ()=> {

  const nav = useNavigate();
  const [activeRoute,setActiveRoute] = useState<number>(0);
 

  const theme = useTheme();

  return (
      <Box component="div" sx={{padding:'1rem',display:'flex',gap:'0.5rem',justifyContent:'center',backgroundColor:theme.palette.primary.main}}>
        <Button variant="text" onClick={()=>{nav("/"); setActiveRoute(0);}} sx={(activeRoute === 0)? {color:theme.palette.secondary.main} : {color:'white'} }>Home</Button>
        <Button variant="text" onClick={()=>{nav("/Portfolio"); setActiveRoute(1);}} sx={(activeRoute === 1)? {color:theme.palette.secondary.main} : {color:'white'} } >Portfolio</Button>
        <Button variant="text" onClick={()=>{nav("/Contact"); setActiveRoute(2);}} sx={(activeRoute === 2)? {color:theme.palette.secondary.main} : {color:'white'} }>Contact</Button>
      </Box>

    
  );
}

export default Menu;