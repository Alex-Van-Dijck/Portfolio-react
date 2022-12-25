import React,{useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import styles from "./ComponentCard.module.css";
import { useNavigate } from 'react-router-dom';


export interface ICardProps{
    imgPath: string,
    title:string,
    description:string,
}

const ComponentCard = ({imgPath,title,description}:ICardProps)=> {

  const nav = useNavigate();
  
return(
    <div>
    <Card sx={{ maxWidth: 345 }} style={{width:'22rem'}}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={imgPath}
        sx={{objectFit: "contain" }}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{height:'5rem'}}>
            {description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions className={styles.Center}>
      <Button size="small" color="primary" variant="outlined" onClick={()=>{nav("/Portfolio/" + title)}} >
        Open
      </Button>
    </CardActions>
  </Card>
    </div>
);
}

export default ComponentCard;