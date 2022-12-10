import React,{useEffect} from "react";
import ComponentCard, { ICardProps } from "./ComponentCard";
import styles from './CardPage.module.css';

const CardPage = ()=>{

    useEffect(() => {
        document.title = 'Portfolio';
      }, []);

    const Cardlist:ICardProps[] = [
        {title:"Shoppinglist",
        description:"This app lets you add & remove items from a shoppinglist",
        imgPath:"/Pages/Portfolio/shopping.png"},
        {title:"Todo",
        description:"This app contains a list of tasks that you can add and delete. The app also includes an input field where you can add a new task.",
        imgPath:"/Pages/Portfolio/Todo.png"},
        {title:"Pokemon",
        description:"This app makes an api call to https://pokeapi.co/, displays a chosen number of pokemon and has a searchfield.",
        imgPath:"/Pages/Portfolio/Poke5.png"},
        {title:"TicTacToe",
        description:"This app lets you play a game of TicTacToe."
        ,imgPath:"/Pages/Portfolio/TicTacToe.png"}
    ]

    return(
        <div className={styles.container}>
            {Cardlist.map((card:ICardProps)=> 
                <ComponentCard title={card.title} description={card.description} imgPath={card.imgPath} />
            )}

        </div>
    )
}

export default CardPage;