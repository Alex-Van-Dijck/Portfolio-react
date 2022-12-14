import React,{useEffect} from "react";
import { Typography,  useTheme,Avatar } from '@mui/material';
import styles from './Home.module.css';



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
                <div style={{marginTop:'3rem',marginRight:'3rem',zIndex:2,gridColumn:2}}>
                    <img src="/Pages/Home/beeldinhoud.png" style={{width:'100%'}}/>
                </div>
                <div className={styles.blob} style={{backgroundColor:theme.palette.secondary.light}}/>
                <div className={styles.blob2} style={{backgroundColor:theme.palette.secondary.light}}/>
                <div className={styles.blob3} style={{backgroundColor:theme.palette.secondary.light}}/>
        </div>
        
    )
}

export default Home;