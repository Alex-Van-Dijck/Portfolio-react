import React, { useState, useEffect } from 'react';
import { Button, Typography,Container,useTheme } from '@mui/material';

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

  return (
    <Container component="main" maxWidth="md" style={{margin:'2rem',justifyContent:'center'}} >
      <Button onClick={() => fetchJoke()} variant="contained">
        Get a new joke
      </Button>
      {joke && (
        <Typography variant="body1" style={{color:theme.palette.text.primary}}>{joke}</Typography>
      )}
    </Container>
  );
};

export default DadJoke;