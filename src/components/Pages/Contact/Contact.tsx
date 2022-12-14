import React,{useEffect, useState,useRef} from "react";import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import {Box,Alert} from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import styles from './Contact.module.css';
import emailjs, { sendForm } from '@emailjs/browser';
import { useTheme } from "@mui/material";


const ContactPage = () =>{


  useEffect(() => {
    document.title = 'Contact';
  }, []);



  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [mailAdress,setMailAdress] = useState<string>("");
  const [message,setMessage] = useState<string>("");
  //0=Not attempted, 1=Failed, 2=Success
  const [isSent,setIsSent] = useState<number>(0);


  const theme = useTheme();


      const send = async(e:any) => {
        e.preventDefault();

        let name = firstName + " " + lastName;

        console.log("Sending email");
        let result = emailjs.send("service_7pwx6fr","template_64ons7b",{
          message: message,
          from_name: name,
          reply_to: mailAdress,
          },'7F0S5P5Q87xsdR3Lk').then((result) => {
            setIsSent(2);
        }, (error) => {
            setIsSent(1);
        });
       
      }

    return(
      <Container component="main" maxWidth="xs" >
        
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom:8,
          }}
        >
          {isSent==1?<Alert severity="error">Something went wrong, your email was not sent!</Alert>  : isSent==2?<Alert severity="success">Your email was succesfully sent!</Alert>:<></> }
          <Avatar sx={{ m: 1, backgroundColor:theme.palette.secondary.main}} >
            <ConnectWithoutContactIcon  />
          </Avatar>
          <Typography component="h1" variant="h5">
            Contact
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}  >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={(e)=>{setFirstName(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e)=>{setLastName(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mailAdress"
                  label="Email Address"
                  name="mailAdress"
                  autoComplete="email"
                  value={mailAdress}
                  onChange={(e)=>{setMailAdress(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  minRows={4}
                  required
                  fullWidth
                  name="message"
                  label="Message"
                  type="text"
                  id="message"
                  size="medium"
                  multiline
                  maxRows={7}
                  value={message}
                  onChange={(e)=>{setMessage(e.target.value)}}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e) => send(e)}
            >
              Send message
            </Button>
          </Box>
        </Box>

      </Container>
    ) 
}

export default ContactPage;