import React,{useEffect} from "react";
import { Grid } from '@mui/material';
import styles from './Home.module.css';


const Home = () =>{

    useEffect(() => {
        document.title = 'Home';
      }, []);

    return(
        <div className={styles.container}>  
                <p className={styles.introText}>
                    <div className={styles.bigText}>
                        Hi, I'm Alex.<br/><br/>

                        A programming student<br/>
                        <div style={{opacity:'80%'}}>
                        based in Antwerp <br/>
                        </div>
                    </div>
                    <div className={styles.smallText}>
                    On this website, you'll find a selection of my most impressive React projects, complete with descriptions and demos.<br/> You'll also learn more about other skills and expertise.
                    </div>
                </p>
                <img src="/Pages/Home/kop_kleiner.png" className={styles.pic}/>
                <div className={styles.blob}/>
                <div className={styles.blob2}/>
                <div className={styles.blob3}/>
        </div>
        
    )
}

export default Home;