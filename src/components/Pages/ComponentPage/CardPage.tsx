import React from "react";
import ComponentCard, { ICardProps } from "./ComponentCard";
import styles from './CardPage.module.css';

const CardPage = ()=>{

    const Cardlist:ICardProps[] = [
        {title:"Shoppinglist",
        description:"This app lets you add & remove items from a shoppinglist",
        imgPath:"/ComponentShots/shopping.png"},
        {title:"Todo",
        description:"This app contains a list of tasks that you can add and delete. The app also includes an input field where you can add a new task.",
        imgPath:"/ComponentShots/Todo.png"}
    ]

    //testCode
    for(let i = 0;i<5;i++){
        Cardlist.push(Cardlist[0]);
    }
    console.log(Cardlist)

    return(
        <div className={styles.container}>
            {Cardlist.map((card:ICardProps)=> 
                <ComponentCard title={card.title} description={card.description} imgPath={card.imgPath} />
            )}

        </div>
    )
}

export default CardPage;