import CardActions from "@mui/material/CardActions";
import { useEffect } from "react";
import styled from "styled-components";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import "./button.css";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Card, CardHeader, CardMedia, CardContent } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BasicCard from "./other";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/actions/productActions";
import Counter from "./counter";
import { removeFromCart } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/productActions";

export default function NewFilmCard(props) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(props.Count);
  const randomcolor = () =>
    "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  useEffect(() => {
    function handleColor() {
      document.body.style.background ="#";
    }
    handleColor();
    return () => {};
  }, []);
  return (
    <div style={{ width: "250px", margin: "20px" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar>
              {props.title.length > 1 ? props.title[0].toUpperCase() : "new"}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.title}
          subheader={props.Date}
        />
        <CardMedia component="img" height="194" image={props.img} alt="movie" />
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() => deleteProduct(props.id)}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
            <p style={{ paddingLeft: "20px", fontFamily: "fantasy",fontSize:"20px",color:"#6f4e37" }}>
              {props.price}£
            </p>
          </IconButton>
        </CardActions>
        <div>
          <Link to={`/view/${props.id}`}>
            <button className="ui-btn">
              <span style={{ textDecoration: "none" }}>VIEW</span>{" "}
            </button>
          </Link>
          <p>{props.Count}</p>
        </div>
      </Card>
    </div>
  );
}
