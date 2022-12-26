import React, { useEffect, useState } from "react";
import {Typography,useTheme} from '@mui/material';

const CurrentTime = () =>{

    const theme= useTheme();
    const [time,setTime] = useState(new Date());

    // setInterval(()=>{
    //     setTime((time)=>time+1);
    // },1000)

    useEffect(()=>{
        let handle = setInterval(()=>{
            setTime(new Date());
        },1000);

        return ()=>{
            clearInterval(handle);
        }

    },[]);

    return(
        <Typography variant='body1' color={theme.palette.text.primary}>
            {time.toLocaleTimeString()}
        </Typography>
    )

}

export default CurrentTime;