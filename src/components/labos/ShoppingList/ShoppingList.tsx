import React, { useState,useEffect } from "react";
import styles from "./shoppingList.module.css";
import {Alert, Button,TextField,Table,TableHead,TableBody,TableCell,TableRow, TableContainer,Paper, Container} from '@mui/material';

interface shoppingListItem{
    name:string,
    quantity:number
}

const ShoppingList = () =>{

    useEffect(() => {
        document.title = 'Shoppinglist';
      }, []);
    

    const [shoppingList,setShoppingList] = useState<shoppingListItem[]>([{name:"Aardappelen",quantity:5}]);
    const [name,setName] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(0);
    const [successMessage,setSuccessMessage] = useState("");
    const [errorMessage,setErrorMessage] = useState("");

    const handleAdd = ()=>{
        if(quantity===0){
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
        <Container sx={{m:2}}>
            {successMessage && <Alert severity="success" sx={{m:1}}>
                {successMessage}    
            </Alert> }
            {errorMessage &&<Alert severity="error" sx={{m:1}}>
                {errorMessage}
            </Alert>}

            <div style={{display:'flex', flexDirection: 'column',gap:'1rem'}}>
                <TextField label="Name" placeholder="Name" value={name} onChange={(event)=>{setName(event.target.value)}}/>
                <TextField type="number" label="Quantity" placeholder="Quantity" value={quantity} onChange={(event)=>{setQuantity(parseInt(event.target.value))}}/>
            </div>
            <Button variant="contained" size='small' onClick={handleAdd} sx={{m:2}}>Add</Button>

            <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th></th>
                    </TableRow>
                </TableHead>
                <tbody>
                    {
                        shoppingList.map((item,index)=>(
                            <TableRow>
                                <TableCell>
                                    {item.name}
                                </TableCell>
                                <TableCell>
                                    {item.quantity}
                                </TableCell>
                                <TableCell>
                                    <Button variant="contained" size='small' onClick={()=>{removeItem(index)}}>Remove</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </tbody>
            </Table>
            </TableContainer>
        </Container>
    )
}

export default ShoppingList;