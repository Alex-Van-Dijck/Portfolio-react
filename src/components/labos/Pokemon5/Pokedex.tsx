import React, { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';

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
        console.log("results");
        console.log(Pokedex.results);
        setPokemon(Pokedex.results);
        setLoading(false);
    }

    useEffect(()=>{
        getPokemon(limit);
    },[limit])

    return(
        
        <div>
            {loading&& <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel='blocks-loading'
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64','#f47e60','#f8b26a','#abbd81','#849b87']}
        />}
        <input type="text" onChange={(event)=> setFilterText(event.target.value)} value={filterText}/>
            <ul>
            {
                pokemon.filter((p)=>p.name.toUpperCase().startsWith(filterText.toUpperCase())).map((pokemon)=>{
                    return <li>{pokemon.name}</li>
                })
            }
            </ul>
            
        </div>
    )

}

export default Pokedex;