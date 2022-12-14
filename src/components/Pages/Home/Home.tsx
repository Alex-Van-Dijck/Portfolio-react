import React,{useEffect,useMemo} from "react";
import { Grid, Typography, createTheme, useTheme } from '@mui/material';
import styles from './Home.module.css';
import { lightTheme } from "../../../Styling/Theme";


const Home = () =>{

    const theme = useTheme();

    useEffect(() => {
        document.title = 'Home';
      }, []);

    return(
        <div className={styles.container}>  
                <Typography  sx={{margin:'3rem',zIndex:1,gridColumn:1,color:theme.palette.text.primary}}>
                    <Typography variant='h1'>
                        Hi, I'm Alex.<br/><br/>

                        A programming student<br/>
                        <div style={{opacity:0.8}}>
                        based in Antwerp <br/>
                        </div>
                    </Typography>
                    <Typography variant="subtitle1">
                    On this website, you'll find a selection of my most impressive React projects, complete with descriptions and demos.<br/> You'll also learn more about other skills and expertise.
                    </Typography>
                </Typography>
                <img src="/Pages/Home/kop_kleiner.png" className={styles.pic}/>
                <div className={styles.blob}/>
                <div className={styles.blob2}/>
                <div className={styles.blob3}/>
        </div>
        
    )
}

export default Home;