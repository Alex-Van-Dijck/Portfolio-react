import React, { useState } from "react";
import styles from "./shoppingList.module.css";

interface shoppingListItem{
    name:string,
    quantity:number
}

const ShoppingList = () =>{

    const [shoppingList,setShoppingList] = useState<shoppingListItem[]>([{name:"Aardappelen",quantity:5}]);
    const [name,setName] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(0);
    const [successMessage,setSuccessMessage] = useState("");
    const [errorMessage,setErrorMessage] = useState("");

    const handleAdd = ()=>{
        if(quantity==0){
            setErrorMessage("Quantity should be above 0");
            setSuccessMessage("");
        }else{
            setShoppingList([...shoppingList, {name:name,quantity:quantity}]);
            setSuccessMessage("Item added to shopping list");
            setErrorMessage("");
        }

    }

    const removeItem = (index:number)=>{

        if(index>shoppingList.length){
            setErrorMessage("Index out of bounds");
            setSuccessMessage("");
        }else{
            let tempList = shoppingList.filter((item,i)=> i !== index);
            setShoppingList(tempList);
            setSuccessMessage("Item removed from shopping list");
            setErrorMessage("");
        }

        
    }

    return(
        <div>
            {successMessage && <div className={styles.success}>
                {successMessage}    
            </div> }
            {errorMessage && <div className={styles.error}>
                {errorMessage}
            </div>}
            


            <div className={styles.shoppingAddForm}>
                <label>Name:</label>
                <input type={"text"} placeholder="Name" value={name} onChange={(event)=>{setName(event.target.value)}}/>
                <label>Quantity: </label>
                <input type={"number"} placeholder="Quantity" value={quantity} onChange={(event)=>{setQuantity(parseInt(event.target.value))}}/>
            </div>
            <button onClick={handleAdd}>Add</button>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        shoppingList.map((item,index)=>(
                            <tr>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.quantity}
                                </td>
                                <td>
                                    <button onClick={()=>{removeItem(index)}}>Remove</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShoppingList;