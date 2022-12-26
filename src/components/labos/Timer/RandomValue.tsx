import React, { useEffect, useState } from "react";
import {Typography,useTheme} from '@mui/material';

interface RandomValueProps{
    min:number,
    max:number
}

const randomNumberBetween = (min:number,max:number) =>{

    return Math.floor(Math.random()* (max-min))+min;

}

const RandomValue = ({min,max} : RandomValueProps) =>{

    const theme= useTheme();

    const [randomValue, setRandomValue] = useState(randomNumberBetween(min,max));

    useEffect(()=>{
        let handle = setInterval(()=>{
            setRandomValue(randomNumberBetween(min,max));
        },2000);

        return()=>{
            clearInterval(handle);
        }
    },[])
    
    return(
        <>
            <Typography variant="body1" color={theme.palette.text.primary}>
                Random value between {min} and {max}: {randomValue}
            </Typography>
        </>
    );

}

export default RandomValue;