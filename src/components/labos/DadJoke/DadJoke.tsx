import { useEffect, useState} from 'react';
import { Button, Typography,useTheme,Grid } from '@mui/material';

interface DadJoke {
  joke: string;
}

const DadJoke = () => {
  const theme = useTheme();
  const [joke, setJoke] = useState<string>("");
  const [favJoke,setFavJoke] = useState<string>('');
 

    const fetchJoke = async () => {
      const res = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json"
        }
      });
      const data: DadJoke = await res.json();
      setJoke(data.joke);
    };

    useEffect(()=>{
      fetchJoke();
    },[]);
    
    useEffect(()=>{
      setFavJoke(getJoke());
    },[]);

    useEffect(()=>{
      storeJoke(favJoke);
    },[favJoke]);

    const storeJoke=(joke:string) =>{
        localStorage.setItem('joke', JSON.stringify(joke));
        console.log('[POST] ' + joke);
    }

    const getJoke:any=()=>{
      let res = JSON.parse(localStorage.getItem('joke') ?? '{}');
      console.log('[GET] ' + res);
      return res;
    }

  return (
    <Grid component="main" maxWidth="md" 
     container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{marginTop:'15%', minWidth:'100%' }}>
      <Grid item xs={3}>
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={3}>
        <Grid item>
            {joke && (
            <Typography variant="body1" style={{color:theme.palette.text.primary}}>{joke}</Typography>
            )}
          </Grid>
          <Grid item>
            <Grid container direction="row" spacing={1}>
              <Grid item>
                <Button onClick={() => fetchJoke()} variant="contained">
                Get a new joke
                </Button>
              </Grid>
              <Grid item>
                <Button onClick={()=> setFavJoke(joke)} variant="contained">
                  Set as favorite
                </Button>
              </Grid>
            </Grid>
          </Grid>
            {favJoke && (
             <Grid item>
                <Typography variant="h5" style={{color:theme.palette.text.primary}}>Favorite joke:</Typography>
                <Typography variant="body1" style={{color:theme.palette.text.primary}}>{favJoke}</Typography>
              </Grid>
            )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DadJoke;