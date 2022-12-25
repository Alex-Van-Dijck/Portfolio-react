import { useState} from 'react';
import { Button, Typography,useTheme,Grid } from '@mui/material';

interface DadJoke {
  joke: string;
}

const DadJoke = () => {
  const theme = useTheme();
  const [joke, setJoke] = useState<string>("");

    const fetchJoke = async () => {
      const res = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json"
        }
      });
      const data: DadJoke = await res.json();
      setJoke(data.joke);
    };

    const storeJoke=(joke:string) =>{
        localStorage.setItem('joke', JSON.stringify(joke));
    }

    const getJoke:any=()=>{
      let res = JSON.parse(localStorage.getItem('joke') || 'Not found');

      return res;
    }

  return (
    <Grid component="main" maxWidth="md" 
     container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{marginTop:'20%', minWidth:'100%' }}>
      <Grid item xs={3}>
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={1}>
          <Grid item>
            <Grid container direction="row">
              <Grid item>
              <Button onClick={() => fetchJoke()} variant="contained">
              Get a new joke
              </Button>
              
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            {joke && (
            <Typography variant="body1" style={{color:theme.palette.text.primary}}>{joke}</Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DadJoke;