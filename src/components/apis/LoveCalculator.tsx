import React, { useState } from "react";
import { TextField,Button,CircularProgress,Container, Typography,Icon, useTheme } from "@mui/material";

interface LoveObject {
  percentage: string;
  result: string;
}

const LoveCalculator = () =>{

    const apiKey:string = (process.env.REACT_APP_RAPIDAPI_API_KEY as string);
    const [name1,setName1] = useState<string>('');
    const [name2,setName2] = useState<string>('');
    const [love,setLove] = useState<LoveObject>();
    const [loading, setLoading] = useState(false);
    const enabled =
    name1.length > 0 &&
    name2.length > 0;
    const theme = useTheme();

    const getLove = async(name1:string,name2:string) =>{

        setLoading(true);
        console.log('[ENV] ' + apiKey);
        const url = 'https://love-calculator.p.rapidapi.com/getPercentage?sname='+name1+'&fname='+name2;

        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }};
        
        const res = await fetch(url,options);
        setLove(await res.json());
        setLoading(false);

    }

    return(
        <>
        <form style={{display: 'flex',flexDirection: 'column',margin: 'auto',width: 'fit-content',paddingTop:'5vh'}}>
          <TextField
                autoFocus
                margin="dense"
            id="name1"
                label="Your Name"
                type="text"
                fullWidth
                onChange={(e)=>{setName1(e.target.value)}}
                value={name1}
              />
              <TextField
                margin="dense"
                id="name2"
                label="Partner's Name"
                type="text"
                fullWidth
                onChange={(e)=>{setName2(e.target.value)}}
                value={name2}
              />
             <Button variant="contained" sx={{margin:'2vh'}} color="primary" disabled={!enabled} onClick={()=>{getLove(name1,name2)}}>Test Your Love</Button>
             <div style={{margin:'auto'}}>
            {loading&& <CircularProgress style={{margin:'2vh'}} />}
             </div>
             
            </form>
            
            {love&&
            
            <Container sx={{textAlign:'center',justifyContent:'center',marginTop:'8vh'}}>
                <Typography variant="h2" display="inline" color={theme.palette.text.primary}>{love.percentage}%</Typography>
                <Typography variant="h4" color={theme.palette.text.primary}>{love.result}</Typography>
            </Container>}
        </>
    )
}

export default LoveCalculator;