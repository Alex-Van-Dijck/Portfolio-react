import {useEffect,useState} from 'react';
import { Datum, RootObject } from './Weatherservice';
import {Table,Paper,TableContainer,TableHead,TableRow,TableCell,TableBody,Box,Typography,useTheme} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const Weather = () =>{

    const theme = useTheme();
    const [weather,setWeather] = useState<Datum[]>();
    const apiKey:string = (process.env.REACT_APP_RAPIDAPI_API_KEY as string);
    const [timed,setTimed] = useState(false);

    const getWeather=async()=>{

        const url = 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=51.260197&lon=4.402771&units=metric';

        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
        }
        };

        let response = await fetch(url, options);
        let WeatherValues:RootObject = await response.json();
        setWeather(WeatherValues.data);

    }

    setTimeout(() => {
        setTimed(true);
      }, 5000)

    useEffect(()=>{
        getWeather();
    },)
    
if(weather){
    return(
    
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                    <TableCell>
                      Time
                    </TableCell>
                    <TableCell>
                      Temperature in °C
                    </TableCell>
                    <TableCell>
                      Weather
                    </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {weather.map((row) => (
                <TableRow
                key={row.timestamp_local.toLocaleString()}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.timestamp_local.toLocaleString()}
                </TableCell>
                <TableCell align="center">{row.app_temp}°C</TableCell>
                <TableCell align="center">
                    {row.weather.description}
                    </TableCell>
                </TableRow>
            ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
    )
    
}else{
    return(
        <Box sx={{ display: 'flex', flexDirection:'column', width: '100vw', alignItems:'center',justifyContent:'center',height:'80vh',}}>
            <CircularProgress />
            {timed&&<Typography variant='h3' sx={{color:theme.palette.text.primary, textAlign:'center', paddingTop:'5vh'}}>
                If this keeps loading, the site has passed its daily API request limit.<br/>
                Come back tomorrow.
            </Typography>}
        </Box>
    )
}

}

export default Weather;