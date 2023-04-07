import CardActions from "@mui/material/CardActions";
import { useEffect } from "react";
import styled from "styled-components";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Card , CardHeader , CardMedia , CardContent } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BasicCard from "./other";
import { Link } from "react-router-dom";




export default function FilmCard({ item, deleteProduct }) {




  const randomcolor =()=>'#'+(Math.random()*0xFFFFFF<<0).toString(16);
  useEffect(()=>{function handleColor() {
    document.body.style.background = randomcolor() 
   }
   handleColor();
      return ()=>{

      }
},[])
  return (
    <div style={{width:'300px', margin:"20px"}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar>
            { item.title.length > 1 ? item.title[0].toUpperCase() : "new"}
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={item.title}
        subheader={item.Date}
      />
      <CardMedia
        component='img'
        height='194'
        image={item.img}
        alt='movie'
      />
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'
          onClick={() => deleteProduct(item.id)}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
          <p style={{paddingLeft:"30px",fontFamily:"fantasy"}}>{item.rating}/10</p>
        </IconButton>
      </CardActions>
      <Link to={`/view/${item.id}`}>
        <button>View</button>
      </Link>
    </Card>
    </div>
  );
}