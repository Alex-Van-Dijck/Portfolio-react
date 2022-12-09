import React from "react";
import { Grid } from '@mui/material';

const Home = () =>{
    return(
        <div style={{backgroundColor:'#50b9de', height:'100%'}}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <img src="/Pages/Home/kop_kleiner.png" style={{width:'40%'}}/>
                </Grid>
            <Grid item xs={8}>
            </Grid>
        </Grid>
        </div>
    )
}

export default Home;