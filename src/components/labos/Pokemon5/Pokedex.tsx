import { List, ListItem, ListItemIcon, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { useTheme } from '@mui/material';

interface PokedexResponse{
    results: Pokemon[];
}

interface Pokemon{
    name:string,
    url:string,
}

interface IPokedexProps{
    limit?: number
}

const Pokedex = ({limit = 151}:IPokedexProps)=>{

    const [pokemon,setPokemon] = useState<Pokemon[]>([]);
    const [loading,setLoading] = useState<boolean>(false);
    const [filterText, setFilterText] = useState("");

    const getPokemon = async(limit:number) =>{
        setLoading(true);
        let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=" + limit );
        let Pokedex:PokedexResponse = await response.json();
        setPokemon(Pokedex.results);
        setLoading(false);
    }

    useEffect(()=>{
        getPokemon(limit);
    },[limit])

    const theme = useTheme();
    return(
        
        <div style={{marginTop:'1rem'}} >
            
        <TextField variant='outlined' margin="normal" type="text" onChange={(event)=> setFilterText(event.target.value)} value={filterText}/>
        {loading&& <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel='blocks-loading'
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64','#f47e60','#f8b26a','#abbd81','#849b87']}
        />}
            <List>
            {
                pokemon.filter((p)=>p.name.toUpperCase().startsWith(filterText.toUpperCase())).map((pokemon)=>{
                    return <ListItem style={{color:theme.palette.text.primary}}><ListItemIcon><CatchingPokemonIcon fontSize="small"/></ListItemIcon>{pokemon.name}</ListItem>
                })
            }
            </List>
            
        </div>
    )

}

export default Pokedex;