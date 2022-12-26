import React, { useEffect, useState } from "react";
import {Typography,useTheme} from '@mui/material';

const Timer = () =>{

    const theme= useTheme();

    const [time,setTime] = useState(0);

    // setInterval(()=>{
    //     setTime((time)=>time+1);
    // },1000)

    useEffect(()=>{
        let handle = setInterval(()=>{
            setTime((time)=>time +1);
        },1000);

        return ()=>{
            clearInterval(handle);
        }

    },[]);

    return(
        <Typography variant="body1" color={theme.palette.text.primary}>
            {time}
        </Typography>
    )

}

export default Timer;