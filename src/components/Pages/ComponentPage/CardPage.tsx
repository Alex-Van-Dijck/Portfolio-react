import React,{useEffect, useState} from "react";
import ComponentCard, { ICardProps } from "./ComponentCard";
import styles from './CardPage.module.css';
import { TextField } from "@mui/material";
import poke5 from '../../../Assets/Portfolio/Poke5.png';
import shopping from '../../../Assets/Portfolio/shopping.png';
import TicTacToe from '../../../Assets/Portfolio/TicTacToe.png';
import Todo from '../../../Assets/Portfolio/Todo.png';
import slots from '../../../Assets/Slots/cherry.png';
import dadJoke from '../../../Assets/Portfolio/dadJoke.png';
import ColorSelect from '../../../Assets/Portfolio/ColorSelect.png';

const CardPage = ()=>{

    const [filterText,setFilterText] = useState<string>("");

    useEffect(() => {
        document.title = 'Portfolio';
      }, []);

    const Cardlist:ICardProps[] = [
        {title:"Shoppinglist",
        description:"This app lets you add & remove items from a shoppinglist",
        imgPath:shopping},
        {title:"Todo",
        description:"This app contains a list of tasks that you can add and delete. The app also includes an input field where you can add a new task.",
        imgPath:Todo},
        {title:"Pokemon",
        description:"This app makes an api call to https://pokeapi.co/, displays a chosen number of pokemon and has a searchfield.",
        imgPath:poke5},
        {title:"TicTacToe",
        description:"This app lets you play a game of TicTacToe."
        ,imgPath:TicTacToe},
        {title:"Slots",
        description:"This app lets you play multiple games of Slots.",
        imgPath:slots},
        {title:"DadJoke",
        description:"This app gives you dad jokes pulled from an API",
        imgPath:dadJoke},
        {title:"ColorSelect",
        description:"This app lets you select multiple colors and display them",
        imgPath:ColorSelect}
    ]

    return(
        <div className={styles.rootContainer}>

            <TextField label="Search" variant='outlined' margin="normal" type="search" onChange={(event)=> setFilterText(event.target.value)} value={filterText}/>
            <div className={styles.container}>
                
                {Cardlist.filter((c)=>c.title.toUpperCase().startsWith(filterText.toUpperCase())).map((card:ICardProps)=> 
                    <ComponentCard title={card.title} description={card.description} imgPath={card.imgPath} />
                )}

            </div>
        </div>
    )
}

export default CardPage;