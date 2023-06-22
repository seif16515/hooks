import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonAppBar from "../components/appBar";
import videoBg from "../asssets/videoBg.mp4";
import Footer from "../components/footer";
const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  const handleHover1 = () => {
    setIsHovered1(!isHovered1);
  };
  const zoomStyle1 = {
    transform: isHovered1 ? 'scale(1.05)' : 'scale(1)',
    transition: 'transform 1.5s ease',
    border: isHovered1 ? 'none' : '1px solid black',
  };
  const zoomStyle = {
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    transition: 'transform 1.5s ease',
    border: isHovered ? 'none' : '1px solid black',
  };
  return (
    <div>
    <div style={{ backgroundColor: "#6f4e37" }}>
      <div
        style={{
          position: "absolute",
          top: "",
          left: "",
          width: "100%",
          height: "100%",
          backgroundColor: "background-color: rgba(0,0,0,.5)",
        }}
      ></div>
      <video
        style={{
          width: "100%",
          height: "90vh",
          objectFit: "cover",
        }}
        src={videoBg}
        autoPlay
        muted
        loop
      />
      <div style={{padding:0,width:"100%",height:"650px"}}>
        <div
          style={{
            backgroundColor: "#6f4e37",
            width: "100%",
            height: "300px",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "50%",
              backgroundColor: "black",
              height: "300px",
              backgroundImage:
                "url(https://i.ytimg.com/vi/XUBeH7VQaFY/maxresdefault.jpg)",
              opacity: "0.7",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              ...zoomStyle1,
            }}
            onMouseEnter={handleHover1}
            onMouseLeave={handleHover1  }
          ></div>

          <div
            style={{
              width: "50%",
              backgroundColor: "black",
              height: "300px",
              backgroundImage:
                "url(https://i.ytimg.com/vi/13jhFFYCWVU/maxresdefault.jpg)",
              opacity: "0.7",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              ...zoomStyle,
            }}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          ></div>
        </div>
        <div style={{ width: "100%", height: "350px", display: "flex" }}>
          <div
            style={{
              height: "350px",
              width: "60%",
              backgroundImage:
                "url(https://images.dailyhive.com/20200528082355/Sbux_5.jpeg)",
              opacity: "0.8",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            style={{
              backgroundColor: " #6b4423",
              height: "350px",
              width: "40%",
            }}
          >
            <p style={{paddingLeft: 15,fontSize:"30px" , fontFamily:"Copperplate Gothic Light"}}>SERVISE:</p>
            <br></br>
            <p style={{fontSize:"25px",paddingLeft: 15, fontFamily:"Copperplate Gothic Light"}}>our servise is the best all over the world with no competitors actually we are placed num 1 all over the world ."the client is always right"</p>
          </div>
        </div>
        <div style={{ width: "100%", height: "350px", display: "flex" }}>
        <div
            style={{
              backgroundColor: " #6b4423",
              height: "350px",
              width: "40%",
            }}
          >
            <p style={{paddingLeft: 15,fontSize:"30px" , fontFamily:"Copperplate Gothic Light"}}>COFFEE PLACE:</p>
            <br></br>
            <p style={{paddingLeft: 15,fontSize:"25px", fontFamily:"Copperplate Gothic Light"}}>our coffee places are best in world when you can study ,work and do all your shores or simply enjoy your coffee you can feel like home</p>
          </div>
          <div
            style={{
              height: "350px",
              width: "60%",
              backgroundImage:
                "url(https://content-prod-live.cert.starbucks.com/binary/v2/asset/144-73937.jpg)",
              opacity: "0.8",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          
        </div>

      </div>
    </div>
    <div style={{height:350,width:"100%"}}></div>
    <Footer></Footer>
    </div>
  );
};
export default Home;
