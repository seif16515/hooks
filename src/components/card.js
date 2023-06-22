import CardActions from "@mui/material/CardActions";
import { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { addProduct } from "../redux/actions/productActions";
import "./button2.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Card, CardHeader, CardMedia, CardContent } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BasicCard from "./other";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/actions/productActions";
import Counter from "./counter";
import { addToCart } from "../redux/actions/productActions";
import { useSelector } from "react-redux";

export default function FilmCard(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    function handleColor() {
      document.body.style.background = "#212121";
    }
    handleColor();
    return () => {};
  }, []);
  const { status } = useSelector((state) => state.user);
  const { username } = useSelector((state) => state.user.currentuser);
  const { prop } = useSelector((state) => state.user.currentuser);
  return (
    <div style={{ height: "400", width: "250px", margin: "20px" }}>
      <Card sx={{ maxWidth: 345, borderWidth: 5 }}>
        <CardHeader
          avatar={
            <Avatar style={{ backgroundColor: "#6f4e37" }}>
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
            <p
              style={{
                paddingLeft: "50px",
                fontFamily: "fantasy",
                fontSize: "20px",
                color: "#6f4e37",
              }}
            >
              {props.price} £
            </p>
          </IconButton>
        </CardActions>
        
        <div style={{display:"flex", justifyContent:"space-around"}}>
        {prop === "admin" ? (
            <div>
              <button className="ui-btn" onClick={() => dispatch(deleteProduct(props.id))}>
                <span style={{ textDecoration: "none" }}>DELETE</span>{" "}
              </button>
            </div>
          ) : null}
          <Link to={`/view/${props.id}`}>
            <button className="ui-btn">
              <span style={{ textDecoration: "none" }}>VIEW</span>{" "}
            </button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
