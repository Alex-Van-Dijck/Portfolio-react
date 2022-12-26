import React,{useState} from 'react';
import {Button,Grid,Select,MenuItem,FormControl,SelectChangeEvent} from '@mui/material'

const ColorSelect = () =>{

    const [selectedColors,setSelectedColors] = useState<string[]>([]);
    const [shownColors,setShownColors] = useState<string[]>([]);

    const colors:string[] = ['red','orange','yellow','green','blue','indigo','violet'];

    const handleChange = (event: SelectChangeEvent<typeof selectedColors>) => {
        const {
            target: { value },
          } = event;
          setSelectedColors(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
          );
      };
    return(
        <>
            <Grid container direction='row' spacing={2} alignItems='center' justifyContent='center'>
                <Grid item>
                    <FormControl sx={{ m: 1, width: 300 }}>
                    <Select multiple value={selectedColors} onChange={handleChange}>
                        {colors.map((color) => (
                            <MenuItem
                            key={color}
                            value={color}
                            >
                        {color}
                        </MenuItem>
                         ))}
                    </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                <Button onClick={()=>{setShownColors([...selectedColors])}} variant="contained">
                    Show colors
                </Button>
                </Grid>
            </Grid>

            <Grid container direction='column' >
                {shownColors.map((color)=>(
                    <Grid item  style={{backgroundColor:color,height:'10vh'}}/>
                ))}
            </Grid>
        </>
    )
}

export default ColorSelect;